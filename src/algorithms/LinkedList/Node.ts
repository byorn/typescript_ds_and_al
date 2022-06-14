export class Node {
    public next: Node | null;
    constructor(public value:string){
            this.value=value;
            this.next=null;
    }

}