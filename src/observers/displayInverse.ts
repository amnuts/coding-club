import { Observer } from "./observerAbstract";

export class DisplayInverse extends Observer
{
    public transformHex(hex: string): string
    {
        hex = hex.replace(/^#/, '');
        return `#${(Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()}`;
    }
}
