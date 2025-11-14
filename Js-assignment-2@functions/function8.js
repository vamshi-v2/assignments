function methodize(func) {
    return function (secondArg) {
        return func(this, secondArg);
    };
}

function add(a, b) {
    return a + b;
}

Number.prototype.add = methodize(add);
console.log((3).add(4));                ////////7 