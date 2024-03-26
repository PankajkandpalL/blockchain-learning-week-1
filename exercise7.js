const fibonacciSeq = (n) => {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
        // If n is neither 0 nor 1, calculate the Fibonacci sequence recursively and add
      return fibonacciSeq(n - 1) + fibonacciSeq(n - 2);
    }
}

console.log(fibonacciSeq(0)); 
console.log(fibonacciSeq(1)); 
console.log(fibonacciSeq(5));
