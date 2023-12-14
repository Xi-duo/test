const p1 = new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve('ok')
    },1500)
    
})
const p2 = new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve('oyeah')
    },1000)
    
})
// const p3 = new Promise((resolve , reject) =>{
//     reject('ohhhhhh')
// })  
// const p4 = new Promise((resolve , reject) =>{
//     reject('ohno')
// })  
const result  = Promise.race([p1,p2]).then((data) =>{
    console.log(data)
},(err) =>{
    console.log(err);
})
console.log(result);