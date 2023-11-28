const person = {
    name:"佐科姐姐",
    age:1000,
    address:{
        city:"chongqing",
        area:"nanshan",
    },
    title:['student',{year:2022,title:'Goodstudent'}]
}
const {name,age,address:{city:city,area:mountain},title:[title1,{year:year,title:title2}]} = person; //挨个拿
  

console. log(name);
console.log(year);
console.log(city);
console.log(mountain);
console.log(title1);
console.log(title2);
