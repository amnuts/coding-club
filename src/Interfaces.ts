interface EventBusInterface {
    sub(topic: any, subscriber: SubscriberInterface): void;
    unsub(topic: any, subscriber: SubscriberInterface): void;
    pub(topic: any, payload: any): void;
}

interface SubscriberInterface {
    receive(message: EventMessageInterface): void
}

interface EventMessageInterface {
    payload: any;
    created: number;
    id: any;
    type: string
}

interface Rgb {
    r: number;
    g: number;
    b: number;
}
