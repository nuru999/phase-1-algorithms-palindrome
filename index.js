function isPalindrome(word) {
 
  const cleanStr = word.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  

  return cleanStr === cleanStr.split("").reverse().join("");
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
