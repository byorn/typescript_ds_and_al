"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _3_interfaces_1 = require("../3_interfaces");
describe('testing round 3', () => {
    test('How we pass an object as interfact typed Object', () => {
        const newVehicleDate = {
            name: 'Datsun',
            kms: 1232,
            manufacturedDate: new Date(),
            broken: false,
            calculate() {
                return "calculated value is " + this.name;
            }
        };
        expect((0, _3_interfaces_1.printVehicle)(newVehicleDate)).toBeUndefined();
    });
    test('How we pass an object without interfact typed Object', () => {
        /* notice we can have additional properrties, as the rest of the properties
        saatissfy the type definition */
        const newVehicleDate = {
            name: 'Datsun',
            kms: 1232,
            manufacturedDate: new Date(),
            broken: false,
            calculate() {
                return "calculated value is " + this.name;
            },
            additionalProperty: 'abc',
        };
        expect((0, _3_interfaces_1.printVehicle)(newVehicleDate)).toBeUndefined();
    });
});
