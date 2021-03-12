import {Subscribable} from "./Subscribable";

export class Colour extends Subscribable implements Subscriber
{
    receive(message: EventMessage): void
    {
        this.domElements.forEach(e => e.style.backgroundColor = message.payload);
    }
}