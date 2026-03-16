function factorial(n){
    if (n == 0){
        return 1;
    }
    let fac = 1;
    for (let i = 1;i <= n; i++){
        fac*=1;
    }
    return fac;
}


console.log("0! = "+ factorial(0));
console.log("3! = "+ factorial(3));
console.log("5! = "+ factorial(5));