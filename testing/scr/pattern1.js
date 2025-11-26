function pattern1(n) {

  let line = '';
  
  // function stringOne(a,b){
       
  //     for (let s = 1; s <= b - a; s++) {
  //       line += ' ';
  //     }
  //     for (let j = 1; j <= 2 * a - 1; j++) {
  //       line += 1;
  //     }
  // }
  
  if (n < 0) {
    throw new Error("Input should be positive");
  }
 
  else {
    for (let i = 1; i <= n; i++) {

    line+=stringOne(i,n);

      if (i !== n) {
        line += "\n";
      }
    }
  }
  // return stringOne;
  return line;
}
  function stringOne(a,b){
      let line =""; 
      for (let s = 1; s <= b - a; s++) {
        line += ' ';
      }
      for (let j = 1; j <= 2 * a - 1; j++) {
        line += 1;
      }
        return line;
    }
  

console.log(pattern1(4));

module.exports = {pattern1,stringOne};
 

