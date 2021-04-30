import './Interfaces';
import { v4 as uuid4 } from 'uuid';
import DataStore from './DataStore';

export enum EventType {
    Colour = 'colour',
    DeltaPositionX = 'deltaX',
    DeltaPositionY = 'deltaY',
    Opacity = 'opacity'
}

export class EventBus implements EventBusInterface
{
    public subscribers: {[key: string]: SubscriberInterface[]} = {};
    private datastore: DataStore;
    public tableName: string = 'events';

    public constructor(datastore: DataStore)
    {
        this.datastore = datastore;
        this.datastore.createObjectStore();
    }

    public sub(topic: any, subscriber: SubscriberInterface)
    {
        if (!this.subscribers[topic]) {
            this.subscribers[topic] = []
        }
        this.subscribers[topic].push(subscriber);
    }

    public unsub(topic: any, subscriber: SubscriberInterface)
    {
        if (!this.subscribers[topic]) {
            return;
        }

        let index = this.subscribers[topic].findIndex(s => s === subscriber);

        if (index !== -1) {
            delete this.subscribers[topic][index];
        }
    }

    public pub(topic: any, payload: any)
    {
        if (!this.subscribers[topic]) {
            return;
        }

        let msg: EventMessageInterface = {
            created:  (new Date()).getTime(),
            id: uuid4(),
            payload,
            type: topic
        }

        const putMessageIntoDatastore = async (tableName: string) => {
            await this.datastore.put(tableName, msg);
        }

        putMessageIntoDatastore(this.tableName).then(() => {
            this.subscribers[topic].forEach(s => s.receive(msg));
        });
    }
}
