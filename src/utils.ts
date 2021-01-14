interface Rgb {
    r: number;
    g: number;
    b: number;
}

class RandomColour
{
    public static hex(): string
    {
        const rgb: Rgb = RandomColour.getRandomRgb();
        return `#` + Object.keys(rgb).map(c => {
            const hex = rgb[c as keyof Rgb].toString(16);
            return hex.length == 1 ? `0` + hex : hex;
        }).join('')
    }

    private static getRandomRgb(): Rgb
    {
        return {
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255)
        }
    }
}

function hexToRgb(hex: string): Rgb
{
    hex = hex.replace(/^#/, '');
    let rgb: Array<number> = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b)
        .match(/.{2}/g).map(x => parseInt(x, 16));
    return {
        r: rgb[0],
        g: rgb[1],
        b: rgb[2]
    };
}

export {
    Rgb, RandomColour, hexToRgb
}