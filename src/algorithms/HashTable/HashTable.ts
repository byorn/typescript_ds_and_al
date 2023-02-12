class HashTable {

    hashTableArray:any[] = [];


    constructor() {
    }

    isCollission(){
        /*

    https://www.educative.io/blog/data-strucutres-hash-table-javascript

    1. Linear probing (Add an offset to the hashcode to get the next available slot
    2. Chaining:  (Have a linked list) (most performant)
    3. Resizing the Array or List:
    4. Double hashing:
     */
        //
    }

    put(key:any, value: any):void {
        const hashCode:number = this.hash(key,10);
        this.hashTableArray[hashCode] = value;
    }

    get(key:any):any{
        const hashCode: number = this.hash(key, 10);
        return this.hashTableArray[hashCode];
    }
    hash(key:any, arraySize:number) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % arraySize;
        }
        return total;
    }

    print(){
        this.hashTableArray.forEach((value:any, index:number) => {
            console.log(`item at index ${index} is ${value}`);
        })
    }


}
export default HashTable;