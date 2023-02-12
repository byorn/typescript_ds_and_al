import HashTable from "../HashTable/HashTable";
import exp from "constants";

describe('HashTable Tests', ()=>{
    test('should put a one value in hash table and print values', ()=>{
        const table = new HashTable();
        table.put("byorn", { "name": "byorn de silva", "age" : 12});

        table.print();

    });
    test('should get the value entered', ()=>{
        const table = new HashTable();
        table.put('my name is eminem', "some thing like a phenomenon");

        const value = table.get("my name is eminem");

        expect(value).toEqual("some thing like a phenomenon");
    })

    test('handleing hashTable collision', () => {
        /*

        https://www.educative.io/blog/data-strucutres-hash-table-javascript

        1. Linear probing (Add an offset to the hashcode to get the next available slot
        2. Chaining:  (Have a linked list) (most performant)
        3. Resizing the Array or List:
        4. Double hashing:
         */
        //
    })
})