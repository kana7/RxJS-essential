import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// Rx.Observable.range(1, 110)
//     .bufferCount(25)
//     .subscribe(createSubscriber("items"));

// Rx.Observable.interval(500)
//     .bufferTime(2000)
//     .subscribe(createSubscriber("bufferTime"));

// Rx.Observable.interval(1000)
// // flush après 2 sec quand observable en param
//     .buffer(Rx.Observable.interval(2000))
//     .subscribe(createSubscriber("buffer"));

// const stopSubject$ = new Rx.Subject();
// Rx.Observable.interval(500)
//     .buffer(stopSubject$)
//     .subscribe(createSubscriber("buffer"));

// setInterval(function() {
//     stopSubject$.next();
// }, 3000);

Rx.Observable.range(1, 10)
    .toArray()
    .subscribe(createSubscriber("range"));