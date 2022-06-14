"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_arrays_1 = require("../2_arrays");
describe('testing round 2', () => {
    // test the function that never completes , instead will throw an error.
    // see function definitiion , its return type is never
    test('should expect Error to be thrown', () => {
        //notice inside the expect we have to pass a lamda function
        expect(() => (0, _2_arrays_1.runFuncAndThrowError)()).toThrow("function doesnt complete");
    });
    test('pass an object for destructuring', () => {
        //notice inside the expect we have to pass a lamda function
        const payLoad = {
            name: 'byorn',
            age: 22,
            dob: new Date()
        };
        expect((0, _2_arrays_1.checkDestructuring)(payLoad)).not.toBeDefined();
    });
    test('check how we use arrays', () => {
        expect((0, _2_arrays_1.checkArrays)()).not.toBeDefined();
    });
});
