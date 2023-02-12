class Queue {
    queue:any[]=[];
    constructor() {

    }

    enqueue(value:any){
        this.queue.push(value);
    }

    dequeue(){
        this.queue.shift();
    }

    print(){
        let queue = '';
        this.queue.forEach((i:any)=>{
            queue += `,${i}`;
        })
        console.log(queue);
    }
}
export default Queue;