function sum(...numbers) {
    let s = 0;
    for (let n of numbers) {
        s += n;
    }
    return s;
}

console.log(sum(3, 5));
console.log(sum(3, 5, 2));
console.log(sum(3, 5, 2, 16, 19));
