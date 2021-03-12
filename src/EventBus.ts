import "./Interfaces";
import { v4 as uuid4 } from 'uuid';

export enum EventType {
    Colour = 'colour',
    DeltaPositionX = 'deltaX',
    DeltaPositionY = 'deltaY',
    Opacity = 'opacity'
}

export class EventBus implements EventBusInterface
{
    public subscribers: {[key: string]: Subscriber[]} = {};

    public sub(topic: any, subscriber: Subscriber)
    {
        if (!this.subscribers[topic]) {
            this.subscribers[topic] = []
        }
        this.subscribers[topic].push(subscriber);
    }

    public unsub(topic: any, subscriber: Subscriber)
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

        let msg: EventMessage = {
            created:  (new Date()).getTime(),
            id: uuid4(),
            payload,
            type: topic
        }

        this.subscribers[topic].forEach(s => s.receive(msg));
    }
}
