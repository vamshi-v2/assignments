class Stack{
    constructor(){
    this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items==0){
            console.log("Stack is empty")
        }else{
        this.items.pop();
    }
    }
    isEmpty(){
        if(this.items==0){
            console.log("Stack is empty")
        }else{ return this.items;}
    }
}

const stack = new Stack;
stack.push(3);
stack.push(6);
stack.push(5);
console.log(stack.items);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.items);
console.log(stack.isEmpty());