"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStringsWithGivenOrder = exports.sortStrings = void 0;
function sortStrings(input) {
    var charactersArray = input.split('');
    charactersArray.sort(function (a, b) { return a.localeCompare(b); });
    var sortedString = charactersArray.join('');
    return sortedString.toLowerCase();
}
exports.sortStrings = sortStrings;
function sortStringsWithGivenOrder(input, order) {
    var set = new Set(order);
    if (set.size != 26)
        return '-1';
    var map = new Map();
    var charactersArray = input.toLowerCase().split('');
    for (var _i = 0, order_1 = order; _i < order_1.length; _i++) {
        var c = order_1[_i];
        map.set(c, 0);
    }
    for (var _a = 0, charactersArray_1 = charactersArray; _a < charactersArray_1.length; _a++) {
        var c = charactersArray_1[_a];
        if (map.has(c)) {
            // due to the limitation of ts Map interface
            // ts doesn't keep track of .get() or .set() references
            var count = map.get(c);
            if (count !== undefined) {
                // so the .get() here might return undefined
                // I used ! after the get method to get rid of the error (which, after testing won't affect the compilation)
                // I have added a check here to make sure that the value exists before I mutate it
                map.set(c, map.get(c) + 1);
            }
            else {
                throw new Error('Item is undefined');
            }
        }
    }
    var res = '';
    map.forEach(function (value, key) {
        for (var i = 0; i < value; i++) {
            res += key;
        }
    });
    return res;
}
exports.sortStringsWithGivenOrder = sortStringsWithGivenOrder;
var result1 = sortStrings('HiiveIsLive');
console.log(result1);
var result2 = sortStringsWithGivenOrder('HiiveIsLive', 'zyxwvutsrqponmlkjihgfedcba'.split(''));
console.log(result2);
