const calcFactorial = (n) => {
    if(n==0 || n==1) {
        return 1;
    } else {
         // If the number is not 0 or 1, calculate the factorial recursively by multiplying the number with the factorial of (n-1)
        return n * calcFactorial(n-1);
    }
}

console.log(calcFactorial(5));
console.log(calcFactorial(0));
