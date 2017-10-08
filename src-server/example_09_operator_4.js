import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// function arrayReduce (array, accumulator, startValue){
//     let value = startValue;
//     for (let item of array) {
//         value = accumulator(value, item);
//     }

//     return value;
// }

// const values = [342, 432, 23, 1, 625];

// const sum = arrayReduce(values, (acc, i) => acc + i, 0);

// console.log(sum);

// const max = arrayReduce(values, Math.max, -1);

// console.log(max);

// Rx.Observable.range(1, 10)
//     .merge(Rx.Observable.never())
//     .scan((acc, value) => acc + value)
//     .reduce((acc, value) => acc + value)
//     .subscribe(createSubscriber("reduce"));

Rx.Observable.range(1, 10)
    .map(i => i * i)
    .scan(([last], current) => [current, last], [])
    .subscribe(createSubscriber("reduce"));

function scanLast(acc, value) {
    const last = acc[0];
    return [value, last];
}