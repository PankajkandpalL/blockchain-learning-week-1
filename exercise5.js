const isPalindrome = (str) =>{
 // splitting the code which makes it array and then reversing the array and joining it again to make a string
 return str === str.split('').reverse().join('');
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("Hello"));
