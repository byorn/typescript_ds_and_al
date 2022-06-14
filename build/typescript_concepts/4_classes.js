"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Petrol = exports.EnergySource = void 0;
class EnergySource {
    constructor(name, expiryDate, isNatural) {
        this.name = name;
        this.expiryDate = expiryDate;
        this.isNatural = isNatural;
    }
    produceEnergy() {
        console.log(`${this.name} is producing lots of energy`);
    }
    childCanNotOverride() {
        console.log('try and override me or call me from child');
    }
    childCanOverride() {
        console.log("override me");
    }
}
exports.EnergySource = EnergySource;
class Petrol extends EnergySource {
    constructor(naturalForm) {
        super("petrol", new Date(), true);
        this.naturalForm = naturalForm;
    }
    produceEnergy() {
        console.log(`${this.name} is producing energy and its natural form description is ${this.naturalForm}`);
        this.childCanOverride();
    }
    childCanOverride() {
        console.log(`${this.name} is overrideing parent method`);
        ///this.childCanNotOverride();  --> fails
    }
}
exports.Petrol = Petrol;
