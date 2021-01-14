import { Subject } from "../subject";

export abstract class Observer
{
    protected domElement: HTMLDivElement;
    protected domText: HTMLParagraphElement;

    public constructor(domId: string)
    {
        this.domElement = document.getElementById(domId) as HTMLDivElement;
        this.domText = this.domElement.querySelector('p') as HTMLParagraphElement;
    }

    public update(subject: Subject)
    {
        let colour = this.transformHex(subject.getValue());
        this.domElement.style.backgroundColor = colour;
        this.domText.innerText = `New colour is ${colour}`;
    }

    public abstract transformHex(hex: string): string;
}
