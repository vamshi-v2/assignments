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
      for (let j = 1; j <= 2 * i - 1; j++) {
        line += 1;
      }
      if (i !== n) {
        line += "\n";
      }
    }
  }
  return line;
}

// console.log(pattern1(44));

module.exports = pattern1;

// function pattern1(n){
//   for(let i =0;i<n;i++){
//     let res="";
//     let s=" ".repeat(n-i-1);
//     let p="1".repeat(2*i+1);
//     console.log(res=(s+p));
//   }
// }
// pattern1(44);