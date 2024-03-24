const isPalindrome = (str) =>{
 str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();   
 return str === str.split('').reverse().join('');
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("Hello"));