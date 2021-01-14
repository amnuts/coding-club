import { describe, it } from 'mocha';
import { expect } from 'chai';
import {hexToRgb, RandomColour} from '../src/utils';

describe('RandomColourUnitTests', () => {
    it(`should have created a value`, () => {
        const hex = RandomColour.hex();
        expect(hex).to.be.a('string');
        expect(hex).to.not.be.empty;
    });

    for (let i = 0; i < 10; i++) {
        it(`should have the correct format attempt ${i+1}`, () => {
            let hex = RandomColour.hex();
            expect(hex).to.match(/^#([a-f\d]){2}([a-f\d]){2}([a-f\d]){2}$/i);
        });
    }
});


describe('HexToRgbUnitTests', () => {
    let provider = [
        {val: '#000000', expected: {r: 0, g: 0, b: 0}},
        {val: '#FFFFFF', expected: {r: 255, g: 255, b: 255}},
        {val: '#555555', expected: {r: 85, g: 85, b: 85}},
        {val: '#56A3F1', expected: {r: 86, g: 163, b: 241}},
        {val: '#000', expected: {r: 0, g: 0, b: 0}},
        {val: '#FFF', expected: {r: 255, g: 255, b: 255}},
        {val: '#555', expected: {r: 85, g: 85, b: 85}},
        {val: '#5AF', expected: {r: 85, g: 170, b: 255}},
        {val: '000000', expected: {r: 0, g: 0, b: 0}},
        {val: 'FFFFFF', expected: {r: 255, g: 255, b: 255}},
        {val: '555555', expected: {r: 85, g: 85, b: 85}},
        {val: '56A3F1', expected: {r: 86, g: 163, b: 241}},
        {val: '000', expected: {r: 0, g: 0, b: 0}},
        {val: 'FFF', expected: {r: 255, g: 255, b: 255}},
        {val: '555', expected: {r: 85, g: 85, b: 85}},
        {val: '5AF', expected: {r: 85, g: 170, b: 255}},
    ]

    provider.forEach(run => {
        it(`should convert '${run.val}' correctly`, () => {
            expect(JSON.stringify(hexToRgb(run.val))).to.equal(JSON.stringify(run.expected));
        });
    });

});
