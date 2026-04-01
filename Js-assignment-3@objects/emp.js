let emp={
  name:"vamshi",
  _age:20,
get age(){
  return this._age;
},
set age(value){
  if(value>100){
    console.error(" age should be less than 100");
    return;
  }
  this._age=value;
}
};

emp.age=109;
console.log(emp);


