class Queue{
    constructor(){
    this.items=[];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        this.items.shift();
    }

    isEmpty(){
        if(this.items==0){
            console.log("Stack is empty")
        }else{ return this.items;}
    }
}

const queue = new Queue;
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(5);
console.log(queue);
queue.dequeue();
console.log(queue.items);
queue.enqueue(9);
console.log(queue.items);
console.log(queue.isEmpty());