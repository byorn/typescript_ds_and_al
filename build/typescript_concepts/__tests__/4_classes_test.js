"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _4_classes_1 = require("../4_classes");
describe('test inheritance', () => {
    test('test inheritance', () => {
        const petrol = new _4_classes_1.Petrol("Liquid Petrol");
        petrol.produceEnergy();
        petrol.childCanOverride();
    });
});
