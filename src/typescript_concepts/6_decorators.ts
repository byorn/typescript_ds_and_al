@classDecorator
export class Computer{
    @myDecorater
    brand:string = 'Acer';

    @myDecorater
    get printBrandName():string{
     return this.brand;

    }

    @myDecorater
    startCompiling(): void{
        console.log('compiling')
    }

    @myDecoratorThatWrapsExceptionsAndLogs
    myFunctionThatThrowAnError():void{
        throw new Error('an error occured');
    }

    @passParameter("byorn")
     passParameterToDecorator():void{
        console.log('pass paraterr to decorator method called')
    }

    testParameterDecorator(@parameterDecorator myParam:string):void{
        console.log('calling method paramter decorator');
    }

}

function myDecorater(target:any, key: string):void {
    // target is the prototype object of the class.
    console.log(`key ${key}`);
}

function myDecoratorThatWrapsExceptionsAndLogs(target:any, key: string, desc: PropertyDescriptor):void {
   const myMethodName = desc.value;

   //change my method here. wrap it
   desc.value = function(){
       try{
           myMethodName();
       }catch(e){
           console.log('i caught the exception and now logging');
       }
   }

}
function passParameter(myParam:string) {
   return function parameterDecorator(target: any, key: string, desc: PropertyDescriptor) {
        const myMethod = desc.value;
        desc.value = function(){
            console.log("Before calling pass method i am printing my parameter: " + myParam);
            myMethod();
        }
    }
}

function parameterDecorator(target: any, key: string, index: number){
    console.log(`key ${key} index ${index}`);
}

function classDecorator(constructor: typeof Computer){
    console.log(constructor);
}