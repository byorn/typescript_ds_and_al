import Tree from "../BinarySearchTree/Tree";

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

    })

})