import { describe, it } from 'mocha';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { DisplayRgb } from '../src/observers/displayRgb';

const globalAny:any = global;

describe('DisplayRgb transformation rule', () => {
    let provider = [
        {val: `#000000`, expected: `rgb(0,0,0)`},
        {val: `#FFFFFF`, expected: `rgb(255,255,255)`},
        {val: `#555555`, expected: `rgb(85,85,85)`},
        {val: `#56A3F1`, expected: `rgb(86,163,241)`}
    ]

    beforeEach(() => {
        const dom = new JSDOM(`<html><body><div id="foo"><p></p></div></body></html>`,
            { url: 'http://localhost' }
        );

        globalAny.window = dom.window;
        globalAny.document = dom.window.document;
    });

    provider.forEach(run => {
        it(`should return '${run.val}' correctly`, () => {
            let displayRgb = new DisplayRgb('foo');
            expect(displayRgb.transformHex(run.val)).to.equal(run.expected);
        });
    });
});
