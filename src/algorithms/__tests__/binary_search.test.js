"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch_1 = require("../binarySearch");
describe('binary search', () => {
    describe('iterative algorith test', () => {
        test('Should return 4 as index for given array', () => {
            const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect((0, binarySearch_1.binarySearchIterative)(givenArray, 5)).toEqual(4);
        });
        test('Should return 0 as index for given array', () => {
            const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect((0, binarySearch_1.binarySearchIterative)(givenArray, 1)).toEqual(0);
        });
        test('Should return 8 as index for given array', () => {
            const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect((0, binarySearch_1.binarySearchIterative)(givenArray, 9)).toEqual(8);
        });
    });
    describe('recursive algorithm test', () => {
        test('Should return 4 as index for given array', () => {
            const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect((0, binarySearch_1.binarySearchIterative)(givenArray, 5)).toEqual(4);
        });
        test('Should return 0 as index for given array', () => {
            const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect((0, binarySearch_1.binarySearchIterative)(givenArray, 1)).toEqual(0);
        });
        test('Should return 8 as index for given array', () => {
            const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect((0, binarySearch_1.binarySearchIterative)(givenArray, 9)).toEqual(8);
        });
    });
});
