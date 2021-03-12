import "./scss/main.scss";
import "./Interfaces";
import {EventType, EventBus} from "./EventBus";
import {Colour} from "./subscribers/Colour";
import {DeltaX} from "./subscribers/DeltaX";
import {DeltaY} from "./subscribers/DeltaY";
import {Opacity} from "./subscribers/Opacity";
import {randomColour, rgbToHex, randomInt} from "./utils";

let bus = new EventBus();
let cSubscribers = new Colour(['colour', 'colouropacitydeltaxy']);
let xSubscribers = new DeltaX(['deltax', 'deltaxy', 'colouropacitydeltaxy']);
let ySubscribers = new DeltaY(['deltay', 'deltaxy', 'colouropacitydeltaxy']);
let oSubscribers = new Opacity(['opacity', 'colouropacitydeltaxy']);

bus.sub(EventType.Colour, cSubscribers);
bus.sub(EventType.DeltaPositionX, xSubscribers);
bus.sub(EventType.DeltaPositionY, ySubscribers);
bus.sub(EventType.Opacity, oSubscribers);

window.setInterval(() => bus.pub(EventType.Colour, rgbToHex(randomColour())), 1000);
window.setInterval(() => bus.pub(EventType.DeltaPositionX, randomInt(0, 100)), 200);
window.setInterval(() => bus.pub(EventType.DeltaPositionY, randomInt(0, 100)), 200);
window.setInterval(() => bus.pub(EventType.Opacity, Math.random()), 500);


