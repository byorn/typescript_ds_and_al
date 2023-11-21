export class Node {
    public next: Node | null;
    constructor(public value:string){
        this.next=null;
    }

    print(){
        console.log(`next: ${this.next?.value} | value: ${this.value}`)
    }

}