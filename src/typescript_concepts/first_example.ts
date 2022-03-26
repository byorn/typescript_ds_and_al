"use strict";

// primitive types
export const add = (a: number, b:number):number => {
    return a + b;
}


// array type
export const printArray = (colors: string[]):string=> {

    return colors.join(" ");
    
}

// object literal
export const myObject: { x: number} = {
    x:100
}


// class types
export class Vehicle {
    id:number;
    constructor(id:number) {
        this.id = id;
    }

    getId():string {
        return this.id.toLocaleString();
    }
}




