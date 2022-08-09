import {Stack} from "../stack";

describe(`Test stack implementation`, ()=> {

    test('Should Add items to a stack', () => {

        const myStack = new Stack();
        myStack.push('1');

        expect(myStack.print()).toBe("1,");

    });

    test('Should pop items from a stack', () => {

        const myStack = new Stack();
        myStack.push('1');
        myStack.pop();
        expect(myStack.print()).toBe("");

    });

    test('Should pop items from the top of stack', () => {

        const myStack = new Stack();
        myStack.push('1');
        myStack.push('2');
        myStack.push('3');
        myStack.pop();
        expect(myStack.print()).toBe("2,1,");

    });

})