/*
  STEP 1 -- Add written explanation of your solution here
*/ 
// Write a function isPalindrome that will receive one argument, a string. 
// Your function should return true if the string is a palindrome 
// (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is not a palindrome.


// STEP 2 -- Write your own test cases (???)

// console.log("Expecting: true")
// console.log("=>", isPalindrome("mom"))
  // The question is whether or not what you are expecting is what you actually get.
  // the "=>" is just a physical pointer to wat you're expecting


// STEP 3 -- Create your pseudocode code 

// create function isPalindrome() that recieves a "string"
// the function needs to evaluate each letter and compare it to it's sibling on the other side
// in "mom", need to compare the first "m" to the last "m"; continue until... 
// if index letter "0" matches the last, the function should move to index letter "1" and the second to last index letter
// how does the function know when to stop???


// STEP 4 -- Real code

function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length; i++) {
    word.charAt(i)
    console.log(word.charAt(i))
    console.log(word.charAt(word.length - (i + 1)))
    console.log(word.charAt(i) === word.charAt(word.length - (i + 1)))
    if(word.charAt(i) !== word.charAt(word.length - (i + 1))) {
      return false
    }
  }
  return true
}

// Above is known as a function declaration; this is where we are BUILDING/DELCARING the function
// the parameter is a placeholder for the argument 


// STEP 5 -- Make the code clean and readable


// STEP 6 -- Optimize the code (if possible) 


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


// if (text.charAt(0) === text.charAt(text.length-1)) {
//   //  block of code to be executed if condition1 is true
// } if (text.chartAt(1) === text.chartAt(text.length-2)) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } if (text.ChartAt(2) === text.chartAt(text.length-3)) {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// } else {
//   return false
// }