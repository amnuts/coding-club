import "../Interfaces";
import {Subscribable} from "./Subscribable";

export class Colour extends Subscribable
{
    receive(message: EventMessageInterface): void
    {
        this.domElements.forEach(e => e.style.backgroundColor = message.payload);
    }
}