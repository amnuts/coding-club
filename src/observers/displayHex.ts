import { Observer } from "./observerAbstract";

export class DisplayHex extends Observer
{
    public transformHex(hex: string): string
    {
        return hex;
    }
}
