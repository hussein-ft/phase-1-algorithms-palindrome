// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Reverse the string
  const reversedStr = str.split('').reverse().join('');
  // Compare reversed string with the original string
  return reversedStr === str;
}

// Test cases
console.log(isPalindrome("madam")); // Expected output: true
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("robot")); // Expected output: false
console.log(isPalindrome("level")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false
