/** stack backed by linked list **/
import { LinkedList } from "./LinkedList/LinkedList";
import {Node} from "./LinkedList/Node";

export class Stack {

    items: LinkedList;

    constructor() {
        this.items=new LinkedList();
        
    }

    push(item: string){
        const newItem = new Node(item);
        this.items.add(newItem);
    }

    pop(){
        this.items.delete();
    }

    print():string{
        return this.items.print();
    }

}