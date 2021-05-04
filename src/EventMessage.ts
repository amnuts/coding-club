import {EventMessageInterface} from "./Interfaces";

export class EventMessage implements EventMessageInterface
{
    private readonly created: number;
    private readonly id: any;
    private readonly payload: any;
    private readonly topic: string;

    public constructor(
        created: number,
        id: any,
        payload: any,
        topic: string
    ) {
        this.created = created;
        this.id = id;
        this.payload = payload;
        this.topic = topic;
    }

    getCreated(): number {
        return this.created;
    }

    getId(): any {
        return this.id;
    }

    getPayload(): any {
        return this.payload;
    }

    getTopic(): string {
        return this.topic;
    }
}
