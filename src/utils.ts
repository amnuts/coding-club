interface Rgb {
    r: number;
    g: number;
    b: number;
}

function randomInt(min: number, max: number): number
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColour(): Rgb
{
    return {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };
}

function rgbToHex(rgb: Rgb): string
{
    return `#` + Object.keys(rgb).map(c => {
        const hex = rgb[c as keyof Rgb].toString(16);
        return hex.length == 1 ? `0` + hex : hex;
    }).join('').toUpperCase();
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
    Rgb, randomColour, hexToRgb, rgbToHex, randomInt
}