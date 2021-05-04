import {Subscribable} from "./Subscribable";
import {EventMessageInterface} from "../Interfaces";

export class DeltaY extends Subscribable
{
    receive(message: EventMessageInterface): void
    {
        this.domElements.forEach(e => {
            let current: number = parseInt(
                e.style.top.replace(/px$/, '')
            ) || 0;
            let newPos: number = current + message.getPayload();
            e.style.top = (newPos > 1000 ? 0 : newPos) + `px`;
        });
    }
}