interface Interfaces {
    sub(topic: any, subscriber: Subscriber): void;
    unsub(topic: any, subscriber: Subscriber): void;
    pub(topic: any, payload: any): void;
}

interface Subscriber {
    receive(message: EventMessage): void
}

interface EventMessage {
    payload: any;
    created: number;
    id: any;
    type: string
}
