import {Subscribable} from "./Subscribable";
import {EventMessageInterface} from "../Interfaces";

export class Colour extends Subscribable
{
    receive(message: EventMessageInterface): void
    {
        this.domElements.forEach(e => e.style.backgroundColor = message.getPayload());
    }
}