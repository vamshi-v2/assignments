function pattern1(n) {
  
  let line = '';
  if (n < 0) {
    throw new Error("Input should be positive");
  }
  
  else {
    for (let i = 1; i <= n; i++) {
      for (let s = 1; s <= n - i; s++) {
        line += ' ';
      }

      function numb(w){for (let j = 1; j <= 2 * w - 1; j++) {
        line += 1;
        // console.log(line);
      }
    }
    numb(i);
      if (i !== n) {
        line += "\n";
      }
    }
  }
  return line;
}

console.log(pattern1(5));

module.exports = pattern1;