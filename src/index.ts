import "./scss/main.scss";
import {EventType, EventBus} from "./EventBus";
import {Colour} from "./subscribers/Colour";
import {DeltaX} from "./subscribers/DeltaX";
import {DeltaY} from "./subscribers/DeltaY";
import {Opacity} from "./subscribers/Opacity";
import {randomColour, rgbToHex, randomInt} from "./utils";
import {EventStore} from "./EventStore";
import {EventMessage} from "./EventMessage";
import { v4 as uuid4 } from 'uuid';

let bus = new EventBus();
let store = new EventStore();

let cSubscribers = new Colour(['colour', 'colouropacitydeltaxy']);
let xSubscribers = new DeltaX(['deltax', 'deltaxy', 'colouropacitydeltaxy']);
let ySubscribers = new DeltaY(['deltay', 'deltaxy', 'colouropacitydeltaxy']);
let oSubscribers = new Opacity(['opacity', 'colouropacitydeltaxy']);

bus.sub(EventType.Colour, cSubscribers);
bus.sub(EventType.DeltaPositionX, xSubscribers);
bus.sub(EventType.DeltaPositionY, ySubscribers);
bus.sub(EventType.Opacity, oSubscribers);

let intervals: Array<number> = [];
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let replay = document.getElementById('replay');

start.addEventListener('click', (e) => {
    console.log('start event fired');

    intervals.push(window.setInterval(() => {
        let msg = new EventMessage(Date.now(), uuid4(), rgbToHex(randomColour()), EventType.Colour);
        store.put(msg);
        bus.pub(msg)
    }, 1000));

    intervals.push(window.setInterval(() => {
        let msg = new EventMessage(Date.now(), uuid4(), randomInt(0, 100), EventType.DeltaPositionX);
        store.put(msg);
        bus.pub(msg)
    }, 200));

    intervals.push(window.setInterval(() => {
        let msg = new EventMessage(Date.now(), uuid4(), randomInt(0, 100), EventType.DeltaPositionY);
        store.put(msg);
        bus.pub(msg)
    }, 200));

    intervals.push(window.setInterval(() => {
        let msg = new EventMessage(Date.now(), uuid4(), Math.random(), EventType.Opacity);
        store.put(msg);
        bus.pub(msg)
    }, 500))

    start.setAttribute('disabled', 'disabled');
    stop.removeAttribute('disabled');
    replay.setAttribute('disabled', 'disabled');
});

stop.addEventListener('click', (e) => {
    console.log('stop event fired');
    intervals.forEach(i => {
        clearInterval(i);
    })
    start.removeAttribute('disabled');
    stop.setAttribute('disabled', 'disabled');
    replay.removeAttribute('disabled');
});

replay.addEventListener('click', (e) => {
    console.log('replay event fired');
    store.getAll().then(allEvents => {
        allEvents.forEach((event:any) => {
            console.log(`Replaying ${JSON.stringify(event)}`);
            bus.pub(new EventMessage(
                event.created,
                event.id,
                event.payload,
                event.topic
            ));
        });
    });
});
