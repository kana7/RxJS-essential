import Rx from "rxjs/Rx";
import {createSubscriber} from "./lib/util";

// Rx.Observable.concat(
//     Rx.Observable.of(42),
//     Rx.Observable.throw(new Error("blew")),
//     Rx.Observable.of(10))
//     .subscribe(createSubscriber("catch"));

// Rx.Observable.fromPromise(getApi())
// .catch(error => Rx.Observable.of(error))
//     .subscribe(createSubscriber("api"));

// function getApi() {
//     console.log("Getting API");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("Hello");
//             reject(new Error("hello"));
//         }, 1000);
//     });
// }

getApi()
    .retry(3)
    .catch(error => Rx.Observable.of(error))
    .subscribe(createSubscriber("api"));

function getApi() {
    return new Rx.Observable(observer => {
        console.log("Getting API");
        setTimeout(function() {
            observer.error(new Error());
        }, 1000);
    });
}