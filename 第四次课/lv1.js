let r = new Object(); //object创造
    r.name = 'rsj';
    r.age = 18;
    console.log(r); //直接套关系


function Person(name, age){ //使用函数创造
    this.name = name;
    this.age = age;     //用了this就是属于person的对象了
}
const r1  = new Person('rsj',18);
const r2 = new Person('fc',18);//创造，这个对象里面的属性

let connect = {   //对象字面量 用花括号直接创造！
    name: 'rsj' ,
    age: 18

}//直接创造

function Person (name , age ){
    const rsj = {}
    rsj.name = name;
    rsj.age = age ;
    return rsj ;
}
const p1 = new Person ('fc' , 18);
// 没有用this来创造和初始化对象，所以返回的只是一个普通的新对象罢了