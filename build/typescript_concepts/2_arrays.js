"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArrays = exports.checkDestructuring = exports.runFuncAndThrowError = void 0;
// return type is never
const runFuncAndThrowError = () => {
    throw new Error("function doesnt complete");
    // return a + b; will have syntax error
};
exports.runFuncAndThrowError = runFuncAndThrowError;
const checkDestructuring = ({ name, age, dob }) => {
    console.log(name);
    console.log(age);
    console.log(dob);
};
exports.checkDestructuring = checkDestructuring;
const checkArrays = () => {
    //plain array
    const names = ['jack', 'josh'];
    //two dimensional
    const namesByArea = [['sydney'], ['wolongong']];
    //using map
    const lengthsOfNames = names.map((n) => n.length);
    //two types inside an array
    const datesIhad = [new Date(), '01/12/2019'];
    datesIhad.map((val) => console.log(val));
    //can maintain the type in the order of array
    //below is a tuple
    const dog = ["sophie", 14, new Date()];
};
exports.checkArrays = checkArrays;
