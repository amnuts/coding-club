import { Observer } from "./observerAbstract";
import { hexToRgb, Rgb, rgbToHex } from "../utils";

export class DisplayClosestSafe extends Observer
{
    public transformHex(hex: string): string
    {
        let rgb: Rgb = hexToRgb(hex);
        return rgbToHex({
            r: Math.round((rgb.r / 255) * 5) * 51,
            g: Math.round((rgb.g / 255) * 5) * 51,
            b: Math.round((rgb.b / 255) * 5) * 51
        });
    }
}
