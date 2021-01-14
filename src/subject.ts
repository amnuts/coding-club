import { Observer } from "./observers/observerAbstract";
import { RandomColour } from "./utils";

export class Subject
{
    public observers: Array<Observer>;
    public hex: string;
    protected timer: ReturnType<typeof setTimeout>;

    public constructor()
    {
        this.timer = setInterval(() => {
            this.hex = RandomColour.hex();
            this.notify();
        }, 1000);
    }

    public attach(observer: Observer)
    {
        this.observers.push(observer);
    }

    public detatch(observer: Observer)
    {
        let index = this.observers.findIndex(o => o === observer);
        if (index !== -1) {
            delete this.observers[index];
        }
    }

    public notify()
    {
        this.observers.forEach(o => o.update(this));
    }

    public getValue(): string
    {
        return this.hex;
    }
}
