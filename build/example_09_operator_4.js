"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_Rx2.default.Observable.range(1, 10).map(function (i) {
    return i * i;
}).scan(function (_ref, current) {
    var _ref2 = _slicedToArray(_ref, 1),
        last = _ref2[0];

    return [current, last];
}, []).subscribe((0, _util.createSubscriber)("reduce"));

function scanLast(acc, value) {
    var last = acc[0];
    return [value, last];
}