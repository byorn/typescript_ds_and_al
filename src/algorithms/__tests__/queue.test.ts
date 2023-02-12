import Queue from "../Queue";

describe(`Test queue implementation`, ()=> {

    test('Should Add items to a queu', () => {

        const myQ = new Queue();
        myQ.enqueue("222");
        myQ.enqueue("3333");
        myQ.enqueue("4444");

        myQ.print();
        console.log("---------");
        myQ.dequeue();
        myQ.print();

    });


})