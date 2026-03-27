function inc1(a){            ///////1st function
    return ++a;
}
console.log(inc1(4));
console.log(inc1(inc1(4)));

function inc2(a){            //////2nd function
    return a+1;
}
console.log(inc2(5));
console.log(inc2(inc2(5)));

function inc3(a){           /////////3rd function
    let b=1
    return function(){
        return a+b;
    }
}
console.log(inc3(8)());
