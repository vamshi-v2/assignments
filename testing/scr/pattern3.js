function pattern3(n){

    let line='';

    if (n < 0) {
    throw new Error("Input should be positive");
    }else{

for(let i=1; i<=n;i++){
    for (let s = 1; s <=n-i ; s++) {
        line+=" ";    
    }
    for (let j = 1; j <= i; j++) {
        line+=pascalNumber(i,j)+ " ";
    }
    if (i !== n) {
        line += "\n";
      }
}

function pascalNumber(i,j){       
    if (j=== 1 || j === i) {
        return 1;
    }else {
        return pascalNumber(i - 1, j - 1) +
            pascalNumber(i- 1, j);
    }
}}
return line;
}

// console.log(pattern3(4));

module.exports=pattern3;