"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2) {
    var result = [];
    var index1 = 0;
    var index2 = 0;
    while (index1 < collection_1.length && index2 < collection_2.length) {
        if (collection_1[index1] < collection_2[index2]) {
            result.push(collection_1[index1]);
            index1++;
        }
        else {
            result.push(collection_2[index2]);
            index2++;
        }
    }
    while (index1 < collection_1.length) {
        result.push(collection_1[index1]);
        index1++;
    }
    while (index2 < collection_2.length) {
        result.push(collection_2[index2]);
        index2++;
    }
    return result;
}
exports.merge = merge;
