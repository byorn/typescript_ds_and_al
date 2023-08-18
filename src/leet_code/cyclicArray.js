"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cyclicArray = (A, K) => {
    const numberToShift = Math.abs(A.length - K);
    const answer = [];
    if (numberToShift >= A.length) {
        return A;
    }
    for (let i = numberToShift; i < A.length; i++) {
        answer.push(A[i]);
    }
    for (let j = 0; j < numberToShift; j++) {
        answer.push(A[j]);
    }
    return answer;
};
exports.default = cyclicArray;
