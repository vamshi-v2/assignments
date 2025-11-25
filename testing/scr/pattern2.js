function pattern2(n) {
    let line = '';

    if (n < 0) {
    throw new Error("Input should be positive");
     }

    for (let r = 1; r <= n; r++) {
        for (let s = r; s < n; s++) {
            line += ' ';
        }
        for (let i = r; i <= 2 * r - 1; i++) {
            line += i;
        }
        for (let j = 2 * r - 2; j >= r; j--) {
            line += j;
        }
        if (r !== n) {
            line += "\n";
        }
    }
    return line;

}

module.exports=pattern2;