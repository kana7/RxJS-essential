"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function arrayMap(array, projection){
//     const returnArray = [];
//     for (let item of array) {
//         const projected = projection(item);
//         returnArray.push(projected);
//     }

//     return returnArray; 
// }

// function arrayMergeMap(array, projection) {
//     const returnArray = [];
//     for (let item of array) {
//         const projectedArray = projection(item);
//         for (let projected of projectedArray) {
//             returnArray.push(projected);
//         }
//     }

//     return returnArray;
// }

// const albums = [
//     { title: "Album 1", tracks: [{ id: 1, title: "track 1" }, { id: 2, title: "track 2" }]},
//     { title: "Album 2", tracks: [{ id: 1, title: "track 43" }, { id: 2, title: "track 432" }]},
// ];

// const tracksWrong = arrayMap(albums, album => album.tracks);
// const tracksRight = arrayMergeMap(albums, album => album.tracks);

// console.log(JSON.stringify(tracksWrong));
// console.log(JSON.stringify(tracksRight));

// Rx.Observable.range(2, 3)
//     .mergeMap(i => Rx.Observable.timer(i * 2000).map(() => `After ${i * 2} Seconds`))
//     .subscribe(createSubscriber("mergeMap"));

// Rx.Observable.fromPromise(getTracks())
//     .mergeMap(tracks => Rx.Observable.from(tracks))
//     .subscribe(createSubscriber("tracks"));

// function getTracks() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(["track 1", "track 2", "track 3"]);
//         }, 1000);
//     });
// }


_Rx2.default.Observable.of("my query").do(function () {
    return console.log("quering");
}).mergeMap(function (a) {
    return query(a);
}).do(function () {
    return console.log("after quering");
}).subscribe((0, _util.createSubscriber)("query"));

function query(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("this is the value");
        }, 1000);
    });
}