// @ts-ignore
import {DBSchema} from "idb/with-async-ittr";

export interface EventBusInterface {
    sub(topic: any, subscriber: SubscriberInterface): void;
    unsub(topic: any, subscriber: SubscriberInterface): void;
    pub(payload: any): void;
}

export interface EventStoreInterface {
    getAll(): any;
    put(value: object): void;
}

export interface SubscriberInterface {
    receive(message: EventMessageInterface): void
}

export interface EventMessageInterface {
    getPayload(): any;
    getCreated(): number;
    getId(): any;
    getTopic(): string
}

export interface Rgb {
    r: number;
    g: number;
    b: number;
}

export interface EventStoreSchema extends DBSchema {
    events: {
        value: {
            topic: any,
            payload: EventMessageInterface
        };
        key: string;
    };
}

