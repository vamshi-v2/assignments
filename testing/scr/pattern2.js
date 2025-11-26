function pattern2(n) {
    let line = '';

    if (n < 0) {
        throw new Error("Input should be positive");
    }

    for (let r = 1; r <= n; r++) {
        line+=OneLine(r, n);
        if (r !== n) {
            line += "\n";
        }
    }
    return line;

}

function OneLine(a, b) {
    let line="";
    for (let s = a; s < b; s++) {
        line += ' ';
    }
    for (let i = a; i <= 2 * a - 1; i++) {
        line += i;
    }
    for (let j = 2 * a - 2; j >= a; j--) {
        line += j;
    }
    return line;
}

console.log(pattern2(4));
module.exports = {pattern2, OneLine};


