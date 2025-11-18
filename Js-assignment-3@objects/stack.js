function Stack(){
    
    let items=[];

    function push(element){
        items.push(element);
        return items;
    }
    function pop(){
        if(items.length===0){
            return "Stack is empty"
        }else{
        items.pop();
        return items;
    }
    }
    function isEmpty(){
        if(items.length===0){
            return "Stack is empty";
        }else{ return items;}
        }

    return{
        push,pop,isEmpty
    }
}
const stack= Stack();

console.log(stack.push("vamshi"));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
