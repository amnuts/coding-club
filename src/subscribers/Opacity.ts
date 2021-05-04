import {Subscribable} from "./Subscribable";
import {EventMessageInterface} from "../Interfaces";

export class Opacity extends Subscribable
{
    receive(message: EventMessageInterface): void
    {
        this.domElements.forEach(e => e.style.opacity = message.getPayload());
    }
}