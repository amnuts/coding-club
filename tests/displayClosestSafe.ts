import { describe, it } from 'mocha';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import {DisplayClosestSafe} from "../src/observers/displayClosestSafe";

const globalAny:any = global;

describe('DisplayClosestSafe transformation rule', () => {
    let provider = [
        {val: `#000000`, expected: `#000000`},
        {val: `#FFFFFF`, expected: `#FFFFFF`},
        {val: `#555555`, expected: `#666666`},
        {val: `#56A3F1`, expected: `#6699FF`},
        {val: `#4F623E`, expected: `#666633`},
        {val: `#1188DD`, expected: `#0099CC`},
        {val: `#F18947`, expected: `#FF9933`}
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
            let displayClosestSafe = new DisplayClosestSafe('foo');
            expect(displayClosestSafe.transformHex(run.val)).to.equal(run.expected);
        });
    });
});
