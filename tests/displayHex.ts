import { describe, it } from 'mocha';
import { expect } from 'chai';
import { DisplayHex } from '../src/observers/displayHex';
import { JSDOM } from 'jsdom';

const globalAny:any = global;

describe('DisplayHex transformation rule', () => {
    let provider = [
        {val: `#000000`, expected: `#000000`},
        {val: `#FFFFFF`, expected: `#FFFFFF`},
        {val: `#555555`, expected: `#555555`},
        {val: `#56A3F1`, expected: `#56A3F1`}
    ]

    beforeEach(() => {
        const dom = new JSDOM(`<html><body><div id="foo"><p></p></div></body></html>`,
            { url: 'http://localhost' }
        );

        globalAny.window = dom.window;
        globalAny.document = dom.window.document;
    });

    provider.forEach(run => {
        it(`should transform '${run.val}' correctly`, () => {
            let displayHex = new DisplayHex('foo');
            expect(displayHex.transformHex(run.val)).to.equal(run.expected);
        });
    });
});
