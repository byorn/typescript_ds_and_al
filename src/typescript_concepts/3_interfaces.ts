"use strict";

export interface Vehicle {
    name: string;
    kms: number;
    manufacturedDate: Date;
    broken:boolean;
    calculate():string;
}
// return type is never
export const printVehicle = (vehicle: Vehicle):void => {
    
    console.log(`vehicle name :${vehicle.name}`)
    console.log(`vehicle kms :${vehicle.kms}`)
    console.log(`vehicle manufacture date :${vehicle.manufacturedDate}`)
    console.log(`vehicle broken :${vehicle.broken}`)
    console.log(`vehicle calculated value :${vehicle.calculate()}`)
    
}



