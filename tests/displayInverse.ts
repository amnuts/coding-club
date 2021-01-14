import { describe, it } from 'mocha';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { DisplayInverse } from '../src/observers/displayInverse';

const globalAny:any = global;

describe('DisplayClosestSafe transformation rule', () => {
    let provider = [
        {val: `#000000`, expected: `#FFFFFF`},
        {val: `#FFFFFF`, expected: `#000000`},
        {val: `#555555`, expected: `#AAAAAA`},
        {val: `#56A3F1`, expected: `#A95C0E`},
        {val: `#4F623E`, expected: `#B09DC1`},
        {val: `#1188DD`, expected: `#EE7722`},
        {val: `#F18947`, expected: `#0E76B8`}
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
            let displayInverse = new DisplayInverse('foo');
            expect(displayInverse.transformHex(run.val)).to.equal(run.expected);
        });
    });
});
