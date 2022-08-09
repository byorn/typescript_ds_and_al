import {MyGeneric,driveAllObjects} from "../5_generics";

describe('Test Generics', () => {

    test('Setting Data to a Generic', () => {
        const myGeneric = new MyGeneric<number>(123);
        myGeneric.printValueOfT();
    })


    test('Setting String to a Generic', () => {
        const myGeneric = new MyGeneric<string>('123');
        myGeneric.printValueOfT();
    })

    test('Test Generic constraints', () => {

        class Van {
            name='benz';
            drive(){ console.log('van drives')}
        }

        driveAllObjects<Van>([new Van()]);

    })
})