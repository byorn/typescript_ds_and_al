import Heap from "../Heap/Heap";

describe(`Test Heap implementation`, ()=> {

    test('Should order the heap correctly', () => {

        const h:Heap = new Heap();
        h.insert(4);
        h.insert(3);
        h.insert(5);
        h.insert(10);

        expect(h.heapArray).toEqual([10,5,4,3]);

    });

    test('Should delete correctly', () => {

        const h:Heap = new Heap();
        h.insert(80);
        h.insert(75);
        h.insert(60);
        h.insert(68);
        h.insert(55);
        h.insert(40);
        h.insert(52);
        h.insert(67);

        console.log(h.heapArray);

        h.delete(1);

        console.log(h.heapArray);
        expect(h.heapArray).toEqual([
            80, 68, 60, 67,
            55, 40, 52
        ])


    });

    test('Should delete the root correctly', () => {

        const h:Heap = new Heap();
        h.insert(80);
        h.insert(75);
        h.insert(60);
        h.insert(68);
        h.insert(55);
        h.insert(40);
        h.insert(52);
        h.insert(67);

        console.log(h.heapArray);

        h.delete(0);

        console.log(h.heapArray);
        expect(h.heapArray).toEqual([
            75, 68, 60, 67,
            55, 40, 52
        ])


    });



})