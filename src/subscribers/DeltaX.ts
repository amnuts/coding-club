import "../Interfaces";
import {Subscribable} from "./Subscribable";

export class DeltaX extends Subscribable
{
    receive(message: EventMessageInterface): void
    {
        this.domElements.forEach(e => {
            let current: number = parseInt(
                e.style.left.replace(/px$/, '')
            ) || 0;
            let newPos: number = current + message.payload;
            e.style.left = (newPos > 1000 ? 0 : newPos) + `px`;
        });
    }
}