"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

getApi().retry(3).catch(function (error) {
    return _Rx2.default.Observable.of(error);
}).subscribe((0, _util.createSubscriber)("api"));

function getApi() {
    return new _Rx2.default.Observable(function (observer) {
        console.log("Getting API");
        setTimeout(function () {
            observer.error(new Error());
        }, 1000);
    });
}