function compose(func1, func2){
    return function(a){
        return func2(func1(a));
    }
}
function double(a){
    return a*2;
}
function square(a){
    return a*a;
}

console.log(compose(double,square)(4));         //////64

