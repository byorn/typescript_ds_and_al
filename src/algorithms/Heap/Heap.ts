/* this is a Max Heap */
/*
Root value is Greater than or equal to its children

                                  25
                               /       \
                              20         21
                             /  \      /   \
                            15   19   17    18
                           /  \
                         13    12


 The above heap is represented as an array [25,20,21,15,19,17,18,13,12]

For the value 15, find the left, right and paren ?

array[3] = 15
for the array[i]
left child = 2i + 1      ---->    13
right child = 2i + 2     ---->    12
parent = floor(i-1/2);   ---->    20


Inserting
=========
Insert the value 22
* we will try to insert it under  15     19   17    18
                                 /  \   /
                                13  12  {new}

     If {new} > 19, if yes, swap it, and check with its parent again.


Deleting
=======
From the above diagram if we delete the value 20, we take the right most child leaf and swap it
with the value 20.

Now we have a unbalanced heap.

So we need to heapify it.

We can heapify upwards or downwards.

1) if 12 is > 25 the parent, then heapify upwards
2) if 12 has two children and is less than the children which is 15, and 19 then the heapify downwards

In this case we chose option 2, to as 12 is greater than 15, and 19, we have to replace 12 with the largest of the  left and right child.
so we replace with 19 the right child, and we continue heapifying downwards.


*/


import * as repl from "repl";

class Heap {
    heapArray:number[] = [];

    size:number = 0;
    insert(value:number):void {
        this.heapArray.push(value);
        this.fixHeapAbove(this.size);
        this.size++;
    }

    getParentIndex(currenNodeIndex:number):number{
        return Math.floor((currenNodeIndex-1)/2);
    }

    fixHeapAbove(newValueIndex:number):void {
        const newValueJustInserted:number = this.heapArray[newValueIndex];
        let currentIndex:number = newValueIndex;
        //while you have not hit the root, and while the number you are inspecting is greater than parent
        while(currentIndex > 0 && newValueJustInserted > this.heapArray[this.getParentIndex(currentIndex)]){
            this.heapArray[currentIndex] = this.heapArray[this.getParentIndex(currentIndex)];
            currentIndex = this.getParentIndex(currentIndex);
        }
        this.heapArray[currentIndex] = newValueJustInserted;
    }

    fixHeapBelow(index: number, lastReplacementLeafIndex: number): void{

        let indexToSwap:number;
        //traverse downwards until the very end
        while (index <= lastReplacementLeafIndex){

           const leftChildIndex = this.getLeftChildIndex(index);
           const rightChildIndex =  this.getRightChildIndex(index);;

           if(leftChildIndex <= lastReplacementLeafIndex){
               //no right leaf
               if(rightChildIndex > lastReplacementLeafIndex) {
                   //left childIndex is the one to replace
                   indexToSwap = leftChildIndex;
               } // has a right leaf
               else{
                   //swap the largest leaf , i.e. right or left
                   indexToSwap = this.heapArray[leftChildIndex] > this.heapArray[rightChildIndex] ? leftChildIndex: rightChildIndex;
               }

               //swap
               if(this.heapArray[index]<this.heapArray[indexToSwap]) {
                   let tmp = this.heapArray[index];
                   this.heapArray[index] = this.heapArray[indexToSwap];
                   this.heapArray[indexToSwap] = tmp;
               }
               else{
                   break;
               }

               index = indexToSwap;
           }else{
               break;
           }


        }
    }

    isEmpty():boolean {
        return this.size === 0;
    }

    getLeftChildIndex(currentIndex:number):number{
        return 2*currentIndex + 1;
    }
    getRightChildIndex(currentIndex:number):number{
        return 2*currentIndex + 2;
    }

    /**
     * In some implementations we alway delete from the root, which is 0,
     * in this implementation we delete from any index.
     * That means the calling client has to first have to search the index and pass it to this method
     * @param indexToDelete
     */
    delete (indexToDelete:number): number {
        if(this.isEmpty()){
            throw new Error("Heap is Empty");
        }

        const parentIndex = this.getParentIndex(indexToDelete);
        const itemToDelete = this.heapArray[indexToDelete];

        // 1) copy the right most leaf with to the position you want to delete
        this.heapArray[indexToDelete] = this.heapArray[this.size - 1];

        //2) now we have heap that is not heapified
        if(indexToDelete ==0 || this.heapArray[indexToDelete] < this.heapArray[parentIndex]){
            //parent may be already larger than below leafs, but simply check below nevertheless.
            this.fixHeapBelow(indexToDelete, this.size - 1);
        }else{
            this.fixHeapAbove(indexToDelete);
        }

        this.size--;
        //delete the last item in array
        this.heapArray.pop();

        return itemToDelete;
    }

}

export default Heap;