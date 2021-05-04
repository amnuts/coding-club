import {EventBusInterface, EventMessageInterface, SubscriberInterface} from "./Interfaces";

export enum EventType {
    Colour = 'colour',
    DeltaPositionX = 'deltaX',
    DeltaPositionY = 'deltaY',
    Opacity = 'opacity'
}

export class EventBus implements EventBusInterface
{
    public subscribers: {[key: string]: SubscriberInterface[]} = {};

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

    public pub(msg: EventMessageInterface)
    {
        if (!this.subscribers[msg.getTopic()]) {
            return;
        }

        console.log(`Publishing ${JSON.stringify(msg)}`);
        this.subscribers[msg.getTopic()].forEach(s => s.receive(msg));
    }
}
