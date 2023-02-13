import Tree from "../BinarySearchTree/Tree";
import exp from "constants";

describe('BST', ()=>{

    test('Should insert, and traverse In Order', ()=>{

        const unsortedArray = [25, 20, 15, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value)=>{
            bst.insert(value);
        })

        console.log(bst.traverseInorder())
        expect(bst.traverseInorder()).toBe(', 15, 20, 22, 25, 26, 27, 29, 30, 32');
    })

    test('Should insert, and traverse Pre Order', ()=>{

        const unsortedArray = [25, 20, 15, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value)=>{
            bst.insert(value);
        })

        console.log(bst.traversePreOrder())
        expect(bst.traverseInorder()).toBe(', 25, 20, 15, 22, 27, 26, 30, 29, 32');

    })

    test('Should insert, and traverse Post Order', ()=>{

        const unsortedArray = [25, 20, 15, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value)=>{
            bst.insert(value);
        })

        console.log(bst.traversePostOrder())
        expect(bst.traversePostOrder()).toBe(', 15, 22, 20, 26, 29, 32, 30, 27, 25');

    });

    test('should search the value from a tree', ()=> {
        const unsortedArray = [25, 20, 15, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value) => {
            bst.insert(value);
        })

        expect(bst.get(29)).toEqual(29);
        expect(bst.get(299999)).toEqual(null);
    });

    test('should return the minimum and maximum value', ()=> {
        const unsortedArray = [25, 20, 15, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value) => {
            bst.insert(value);
        })

        expect(bst.min()).toEqual(15);
        expect(bst.max()).toEqual(32);
    });

    test('should delete a leaf 22 that has no children', ()=> {
        const unsortedArray = [25, 20, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value) => {
            bst.insert(value);
        })

        /*
                                   25
                               /       \
                              20         27
                             /  \      /   \
                               22     26      30
                                            /  \
                                           29   32
         */

        expect(bst.traverseInorder()).toEqual(', 20, 22, 25, 26, 27, 29, 30, 32')
        expect(bst.delete(22));
        expect(bst.traverseInorder()).toEqual(', 20, 25, 26, 27, 29, 30, 32');
    });

    test('should delete a leaf 20 that has one child', ()=> {
        const unsortedArray = [25, 20, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value) => {
            bst.insert(value);
        })

        /*
                                   25
                               /       \
                              20         27
                             /  \      /   \
                               22     26      30
                                            /  \
                                           29   32
         */

        expect(bst.traverseInorder()).toEqual(', 20, 22, 25, 26, 27, 29, 30, 32')
        expect(bst.delete(20));
        expect(bst.traverseInorder()).toEqual(', 22, 25, 26, 27, 29, 30, 32');
    });

    test('should delete a leaf 30 that has two children', ()=> {
        const unsortedArray = [25, 20, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value) => {
            bst.insert(value);
        })

        /*
                                   25
                               /       \
                              20         27
                             /  \      /   \
                               22     26      30
                                            /  \
                                           29   32
         */

        expect(bst.traverseInorder()).toEqual(', 20, 22, 25, 26, 27, 29, 30, 32')
        expect(bst.delete(30));
        expect(bst.traverseInorder()).toEqual(', 20, 22, 25, 26, 27, 29, 32');
    });

    test('should delete a leaf 27 that has two children and has more branches', ()=> {
        const unsortedArray = [25, 20, 27, 30, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value) => {
            bst.insert(value);
        })

        /*
                                   25
                               /       \
                              20         27
                             /  \      /   \
                               22     26      30
                                            /  \
                                           29   32
         */

        expect(bst.traverseInorder()).toEqual(', 20, 22, 25, 26, 27, 29, 30, 32')
        expect(bst.delete(27));
        expect(bst.traverseInorder()).toEqual(', 20, 22, 25, 26, 29, 30, 32');
    });

    test('should delete a leaf 27 that has two children and has more branches', ()=> {
        const unsortedArray = [25, 20, 27, 30, 28, 29, 26, 22, 32];
        const bst = new Tree()
        unsortedArray.forEach((value) => {
            bst.insert(value);
        })

        /*
                                   25
                               /       \
                              20         27
                             /  \      /   \
                               22     26      30
                                            /  \
                                           28   32
                                             \
                                              29
         */

        expect(bst.traverseInorder()).toEqual(', 20, 22, 25, 26, 27, 28, 29, 30, 32')
        expect(bst.delete(27));
        expect(bst.traverseInorder()).toEqual(', 20, 22, 25, 26, 28, 29, 30, 32');
        /*

                After deletion
                                  25
                              /       \
                             20         28
                            /  \      /   \
                              22     26      30
                                           /  \
                                          29   32


        */

    });

})