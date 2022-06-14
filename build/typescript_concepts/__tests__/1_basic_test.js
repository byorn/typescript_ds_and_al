"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_basic_1 = require("../1_basic");
describe('testing for the first time', () => {
    describe('testing for the first time', () => {
        test('add works', () => {
            expect((0, _1_basic_1.add)(2, 2)).toBe(4);
        });
        test('returns array separated by space', () => {
            expect((0, _1_basic_1.printArray)(['2', '2'])).toBe('2 2');
        });
        test('returns getId from a class Type', () => {
            const car = new _1_basic_1.Vehicle(4000);
            expect(car.getId()).toBe('4,000');
        });
    });
});
