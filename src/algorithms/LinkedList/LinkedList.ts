import {Node} from './Node'
export class LinkedList{

    public size:number=0;
    public head:Node|null;
    constructor(){
        this.head=null;
    }

    add(node:Node){
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    delete(){
        if(this.head != null){
            this.head= this.head.next;
        }
    }


    print():string{
        let currentNode:Node | null = this.head;
        let str = '';
        while(currentNode!=null){
            str += currentNode.value + ',';
            currentNode = currentNode.next;
        }
        str+='';
        return str;
    }
}