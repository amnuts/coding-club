import { describe, it } from 'mocha';
import { expect } from 'chai';
import { rgbToHex, hexToRgb, randomColour, Rgb } from '../src/utils';

describe(`RandomColourUnitTests`, () => {
    it(`should have created a value`, () => {
        const hex = randomColour();
        expect(hex).to.not.be.empty;
        expect(hex).to.be.a(`object`);
        expect(hex).to.have.keys([`r`, `g`, `b`]);
    });
});

describe(`HexToRgbUnitTests`, () => {
    let provider = [
        {val: `#000000`, expected: {r: 0, g: 0, b: 0}},
        {val: `#FFFFFF`, expected: {r: 255, g: 255, b: 255}},
        {val: `#555555`, expected: {r: 85, g: 85, b: 85}},
        {val: `#56A3F1`, expected: {r: 86, g: 163, b: 241}},
        {val: `#000`, expected: {r: 0, g: 0, b: 0}},
        {val: `#FFF`, expected: {r: 255, g: 255, b: 255}},
        {val: `#555`, expected: {r: 85, g: 85, b: 85}},
        {val: `#5AF`, expected: {r: 85, g: 170, b: 255}},
        {val: `000000`, expected: {r: 0, g: 0, b: 0}},
        {val: `FFFFFF`, expected: {r: 255, g: 255, b: 255}},
        {val: `555555`, expected: {r: 85, g: 85, b: 85}},
        {val: `56A3F1`, expected: {r: 86, g: 163, b: 241}},
        {val: `000`, expected: {r: 0, g: 0, b: 0}},
        {val: `FFF`, expected: {r: 255, g: 255, b: 255}},
        {val: `555`, expected: {r: 85, g: 85, b: 85}},
        {val: `5AF`, expected: {r: 85, g: 170, b: 255}},
    ]

    provider.forEach(run => {
        it(`should convert '${run.val}' correctly`, () => {
            expect(JSON.stringify(hexToRgb(run.val))).to.equal(JSON.stringify(run.expected));
        });
    });
});


describe('RgbToHexUnitTests', () => {
    let provider = [
        {val: {r: 0, g: 0, b: 0}, expected: `#000000`},
        {val: {r: 255, g: 255, b: 255}, expected: `#FFFFFF`},
        {val: {r: 85, g: 85, b: 85}, expected: `#555555`},
        {val: {r: 86, g: 163, b: 241}, expected: `#56A3F1`}
    ]

    provider.forEach(run => {
        it(`should convert '${JSON.stringify(run.val)}' correctly`, () => {
            expect(rgbToHex(run.val)).to.equal(run.expected);
        });
    });
});
