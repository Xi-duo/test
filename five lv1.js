function factorial(n){
 if (n == 1)
 return n;
 else {
    return factorial(n-1)*n;
 }
}
factorial();

function factorial1(x){
    let result = 1;
    for(let i = 1;i<=x;i++){
        result *= i;
    }
    return result;
}
factorial1(5);