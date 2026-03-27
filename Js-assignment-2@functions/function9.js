function twice(func){
    return function(a){
        return func(a,a);
    }
}

function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

var double=twice(add);
console.log(twice(add)(11));        /////22

var square=twice(mul);
console.log(square(7));             //////49