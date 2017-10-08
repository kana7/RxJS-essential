import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

/* Rx.Observable.interval(500)
    .take(5)
    .subscribe(createSubscriber("interval")); */

/* Rx.Observable.timer(1000, 500)
    .take(3)
    .subscribe(createSubscriber("timer")); */

/* Rx.Observable.of("Hello, world")
    .subscribe(createSubscriber("of")); */

Rx.Observable.from(43)
    .subscribe(createSubscriber("from"));