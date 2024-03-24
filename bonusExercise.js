const checkForUniqueChars = (str) => {
    let frequency = {};
    for (let char of str) {
      if (frequency[char]) {
        return false;
      }
      frequency[char] = 1;
    }
    return true;
}
  
console.log(checkForUniqueChars("abcd")); 
console.log(checkForUniqueChars("aabc"));
console.log(checkForUniqueChars("asdqe2ess"));