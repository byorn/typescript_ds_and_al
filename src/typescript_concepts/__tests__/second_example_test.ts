import { runFuncAndThrowError, checkDestructuring, checkArrays }  from '../second_example'

describe('testing round 2', ()=>{

 
    // test the function that never completes , instead will throw an error.
    // see function definitiion , its return type is never
    test('should expect Error to be thrown', () => {

        //notice inside the expect we have to pass a lamda function
        expect(()=>runFuncAndThrowError()).toThrow("function doesnt complete");
    });


    test('pass an object for destructuring', () => {

        //notice inside the expect we have to pass a lamda function
        const payLoad = {
            name: 'byorn', 
            age:22, 
            dob:new Date()
        }
        expect(checkDestructuring(payLoad)).not.toBeDefined();
    });

    test('check how we use arrays', () => {

       expect(checkArrays()).not.toBeDefined();
    });



});