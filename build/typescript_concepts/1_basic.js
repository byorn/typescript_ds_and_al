"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = exports.myObject = exports.printArray = exports.add = void 0;
// primitive types
const add = (a, b) => {
    return a + b;
};
exports.add = add;
// array type
const printArray = (colors) => {
    return colors.join(" ");
};
exports.printArray = printArray;
// object literal
exports.myObject = {
    x: 100
};
// class types
class Vehicle {
    constructor(id) {
        this.id = id;
    }
    getId() {
        return this.id.toLocaleString();
    }
}
exports.Vehicle = Vehicle;
