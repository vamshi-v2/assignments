function Queue(){

    let items=[];
    
    function enqueue(element){
        items.push(element);
        return items;
    }
    function dequeue(){
        items.shift();
        return items;
    }

    function isEmpty(){
        if(items==0){
            console.log("Stack is empty")
        }else{ return items;}
    }
    return {enqueue,dequeue,isEmpty}
}

const queue= Queue();
console.log(queue.enqueue(2));
console.log(queue.enqueue(4));
console.log(queue.enqueue(6));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
