import Rx from "rxjs/Rx";
import { createSubscriber } from "./lib/util";

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


Rx.Observable.of("my query")
    .do(() => console.log("quering"))
    .mergeMap(a => query(a))
    .do(() => console.log("after quering"))
    .subscribe(createSubscriber("query"));


function query(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("this is the value");
        }, 1000);
    });
}