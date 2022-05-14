"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearchRecursive = exports.binarySearchIterative = void 0;
const binarySearchIterative = (inputArray, searchNumber) => {
    let start = 0;
    let end = inputArray.length;
    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        if (searchNumber === inputArray[middle]) {
            return middle;
        }
        if (searchNumber < inputArray[middle]) {
            end = middle;
        }
        else if (searchNumber > inputArray[middle]) {
            start = middle + 1;
        }
    }
    return -1;
};
exports.binarySearchIterative = binarySearchIterative;
const binarySearchRecursive = (inputArray, searchNumber) => {
    return searchRecursive(0, inputArray.length, inputArray, searchNumber);
};
exports.binarySearchRecursive = binarySearchRecursive;
function searchRecursive(start, end, inputArray, searchNumber) {
    let middle = Math.floor((start + end) / 2);
    if (searchNumber === inputArray[middle]) {
        return middle;
    }
    if (searchNumber < inputArray[middle]) {
        end = middle;
    }
    else if (searchNumber > inputArray[middle]) {
        start = middle + 1;
    }
    if (start >= end) {
        return -1;
    }
    return searchRecursive(start, end, inputArray, searchNumber);
}
