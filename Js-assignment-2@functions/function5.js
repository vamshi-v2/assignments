function mul(a,b){
    return a*b;
}
function add(a,b){
    return a+b;
}
function applyf(func){
    return function (a){
        return function(b){
            return func(a,b)
        }
    }
}

addf=applyf(add);
console.log(addf(3)(8));            //////13
console.log(applyf(mul)(5)(5));     //////25