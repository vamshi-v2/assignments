let n=4;
for(let r=1; r<=n; r++){
    let line = ''; 
    for(let s=r; s < n; s++){
    line += ' ';
    }
    for(let i=r; i<=2*r-1; i++){
        line += i;
    }
    for(let j=2*r-2; j>=r; j--){
        line += j;
    }
    console.log(line);
}
