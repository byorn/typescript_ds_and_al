"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printVehicle = void 0;
// return type is never
const printVehicle = (vehicle) => {
    console.log(`vehicle name :${vehicle.name}`);
    console.log(`vehicle kms :${vehicle.kms}`);
    console.log(`vehicle manufacture date :${vehicle.manufacturedDate}`);
    console.log(`vehicle broken :${vehicle.broken}`);
    console.log(`vehicle calculated value :${vehicle.calculate()}`);
};
exports.printVehicle = printVehicle;
