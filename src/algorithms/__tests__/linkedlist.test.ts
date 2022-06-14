import { LinkedList} from "../LinkedList/LinkedList";
import { Node } from "../LinkedList/Node";

describe('test linked list', ()=>{

    test('test linked list', ()=>{
        const ll = new LinkedList();
        const n = new Node("byorn");
        ll.add(n);

        const n1 = new Node("einstein");
        ll.add(n1);
        ll.print();

        ll.delete();

        ll.print();

    });
})