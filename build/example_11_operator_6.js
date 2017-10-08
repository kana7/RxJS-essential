"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _Rx2.default.Observable(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.complete();
});

// simple$.first()
//     .subscribe(createSubscriber("first"));

// simple$.last()
//     .subscribe(createSubscriber("last"));

// simple$.single()
//     .subscribe(createSubscriber("single"));

// simple$.take(2)
//     .subscribe(createSubscriber("take"));

// simple$.skip(2)
//     .subscribe(createSubscriber("skip"));

// simple$.skip(2).take(2)
//     .subscribe(createSubscriber("skip/take"));

// Rx.Observable.interval(500)
//     .skipWhile(i => i < 4)
//     .takeWhile(i => i < 10)
//     .subscribe(createSubscriber("skipWhile"));

_Rx2.default.Observable.interval(500).skipUntil(_Rx2.default.Observable.timer(1000)).takeUntil(_Rx2.default.Observable.timer(2000)).subscribe((0, _util.createSubscriber)("skipUntil"));