let n=5;

for(let i=1; i<=n;i++){
    let line='';
    for (let s = 1; s <=n-i ; s++) {
        line+=" ";    
    }
    for (let j = 1; j <= i; j++) {
        line+=pascalNumber(i,j)+ " ";
    }
     console.log(line);
}
        
function pascalNumber(i,j){       
    if (j=== 1 || j === i) {
        return 1;
    }else {
        return pascalNumber(i - 1, j - 1) +
            pascalNumber(i- 1, j);
    }
}