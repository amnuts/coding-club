import {Subject} from "./subject";
import {DisplayHex} from "./observers/displayHex";
import {DisplayRgb} from "./observers/displayRgb";
import {DisplayClosestSafe} from "./observers/displayClosestSafe";
import {DisplayInverse} from "./observers/displayInverse";

let subject = new Subject();

let hexObserver = new DisplayHex('hex');
let rgbObserver = new DisplayRgb('rgb');
let safeObserver = new DisplayClosestSafe('safe');
let inverseObserver = new DisplayInverse('inverse');

let map = {
    hexAttach: hexObserver,
    rgbAttach: rgbObserver,
    safeAttach: safeObserver,
    inverseAttach: inverseObserver
};

Object.entries(map).forEach(entry => {
    const [id, observer] = entry;
    document.getElementById(id).addEventListener('change', (e) => {
        if ((<HTMLInputElement> e.target).checked) {
            subject.attach(observer);
        } else {
            subject.detach(observer);
        }
    });
});
