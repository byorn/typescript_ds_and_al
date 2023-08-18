"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
An array A consisting of N integers is given.
Rotation of the array means that each element is shifted right by one index,
and the last element of the array is moved to the first place.
For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
*/
const cyclicArray_1 = __importDefault(require("../cyclicArray"));
describe('cyclic array', () => {
    test('Should return 6, 3, 8, 9, 7, for A=3, 8, 9, 7, 6 and K=1', () => {
        expect((0, cyclicArray_1.default)([3, 8, 9, 7, 6], 1)).toStrictEqual([6, 3, 8, 9, 7]);
    });
    test('Should return 9, 7, 6, 3, 8, for A=3, 8, 9, 7, 6 and K=3', () => {
        expect((0, cyclicArray_1.default)([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8]);
    });
});
