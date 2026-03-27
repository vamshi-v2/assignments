function mul(a,b){
    return a*b;
}
function add(a,b){
    return a+b;
}
function curry(func,a){
        return function(b){
            return func(a,b)
        }
}

add4=curry(add,4);
console.log(add4(5));               /////9
console.log(curry(mul,7)(4));       /////28