function indentity(a){
    return function(){
        return a;
    }    
};

idf=indentity(4);

console.log(idf());         //////4