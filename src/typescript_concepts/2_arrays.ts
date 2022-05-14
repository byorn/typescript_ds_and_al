"use strict";

// return type is never
export const runFuncAndThrowError = ():never => {
    throw new Error("function doesnt complete");
    // return a + b; will have syntax error
}


export const checkDestructuring=({name, age, dob} : {name:string, age:number, dob:Date}) =>{
    console.log(name);
    console.log(age);
    console.log(dob);
}

export const checkArrays=()=>{
    //plain array
    const names: string[] = ['jack', 'josh'];

    //two dimensional
    const namesByArea:string[][] = [['sydney'],['wolongong']]

    //using map
    const lengthsOfNames:number[] = names.map((n:string):number=>n.length);

    //two types inside an array
    const datesIhad:(Date|string)[] = [new Date(),'01/12/2019'];
    datesIhad.map((val:(string|Date))=>console.log(val));

    //can maintain the type in the order of array
    //below is a tuple
    const dog:[string, number, Date] = ["sophie",14,new Date()];
    
}

