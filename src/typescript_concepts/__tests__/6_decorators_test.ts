import {Computer} from "../6_decorators";

test(' Reading the file itself should tirgger the decorator', ()=>{
    Computer;
    console.log('see decorator called only once, where class is first defined');
})



test(' The Decorator has run and has changed my method', ()=>{
     let c = new Computer();
    // when i call my function , am actually calling the function the decorator created.
    c.myFunctionThatThrowAnError();
})


test(' Passing a parameter to decorator', ()=>{
    let c = new Computer();
     c.passParameterToDecorator();
})