import { LinkedList} from "../LinkedList/LinkedList";
import { Node } from "../LinkedList/Node";

describe('test linked list', ()=>{

    test('test linked list', ()=>{
        const ll = new LinkedList();
        const n = new Node("byorn");
        ll.add(n);

        const n1 = new Node("einstein");
        ll.add(n1);
        console.log(ll.print());

       n.print()
        n1.print()
        ll.head?.print()
        // ll.delete();
        //
        // console.log(ll.print());
        // ll.delete();
        // console.log(ll.print());
    });
})