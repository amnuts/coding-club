import { Observer } from "./observerAbstract";
import { hexToRgb, Rgb } from "../utils";

export class DisplayRgb extends Observer
{
    public transformHex(hex: string): string
    {
        let rgb: Rgb = hexToRgb(hex);
        return `rgba(${rgb.r},${rgb.g},${rgb.b})`;
    }
}
