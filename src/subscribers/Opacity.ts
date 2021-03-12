import {Subscribable} from "./Subscribable";

export class Opacity extends Subscribable implements Subscriber
{
    receive(message: EventMessage): void
    {
        this.domElements.forEach(e => e.style.opacity = message.payload);
    }
}