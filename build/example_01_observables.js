"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PART 1
/* const simple$ = new Rx.Observable(observer => {
    console.log("Generating observable");
    setTimeout(function() {
        observer.next("an item!");
        setTimeout(function() {
            observer.next("an other item!");
            observer.complete();
        }, 1000);
    }, 1000);
});

const error$ = new Rx.Observable(observer => {
    observer.error(new Error("DANG!"));
});

error$.subscribe(
    item => console.log(`one.next ${item}`),
    error => console.log(`one.error ${error}`),
    () => console.log("one.complete")
);

setTimeout(function() {
    simple$.subscribe({
        next: item => console.log(`two.next ${item}`),
        error(){
            console.log(`two.error ${error}`);
        },
        complete: function() {
            console.log("two.complete"); 
        }
    });
}, 3000); */

// PART 2


function createInterval$(time) {
    return new _Rx2.default.Observable(function (observer) {
        var index = 0;
        var interval = setInterval(function () {
            console.log("Generating " + index);
            observer.next(index++);
        }, time);

        return function () {
            clearInterval(interval);
        };
    });
}

function take$(sourceObservable$, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var count = 0;
        var subscription = sourceObservable$.subscribe({
            next: function next(item) {
                if (count < amount) {
                    observer.next(item);
                    count++;
                } else {
                    observer.complete();
                }
            },
            error: function error(_error) {
                observer.error(_error);
            },
            complete: function complete() {
                observer.complete();
            }
        });

        return function () {
            return subscription.unsubscribe();
        };
    });
}

var everySecond$ = createInterval$(1000);
var eachFive$ = take$(everySecond$, 5);
var subscription = eachFive$.subscribe((0, _util.createSubscriber)("one"));