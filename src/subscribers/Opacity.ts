import "../Interfaces";
import {Subscribable} from "./Subscribable";

export class Opacity extends Subscribable
{
    receive(message: EventMessageInterface): void
    {
        this.domElements.forEach(e => e.style.opacity = message.payload);
    }
}