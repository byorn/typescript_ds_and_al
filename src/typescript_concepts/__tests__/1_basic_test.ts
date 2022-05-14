import { add, printArray, Vehicle }  from '../1_basic'

describe('testing for the first time', ()=>{

 describe('testing for the first time', ()=>{

    test('add works', () => {

        expect(add(2,2)).toBe(4);
    });

    test('returns array separated by space', () => {

        expect(printArray(['2','2'])).toBe('2 2');
    });

    test('returns getId from a class Type', () => {

        const car:Vehicle = new Vehicle(4000);
        expect(car.getId()).toBe('4,000');
    });

});

});