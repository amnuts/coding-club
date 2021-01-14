import { describe, it } from 'mocha';
import { expect } from 'chai';
import { hexToRgb } from '../src/utils';
import { DisplayHex } from "../src/observers/displayHex";

describe('DisplayHex transformation rule', () => {
    let provider = [
        {val: '#000000', expected: '#000000'},
        {val: '#FFFFFF', expected: '#FFFFFF'},
        {val: '#555555', expected: '#555555'},
        {val: '#56A3F1', expected: '#56A3F1'}
    ]

    provider.forEach(run => {
        const windowRef = global.window;
        // @ts-ignore
        global.window = {document: {querySelector: () => null, getElementById: () => null}};
        it(`should return '${run.val}' correctly`, () => {
            let displayHex = new DisplayHex('#foo');
            expect(displayHex.transformHex(run.val)).to.equal(run.expected);
        });
    });
});
