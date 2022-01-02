function isPalindrome(word) {
  // Insert code here;

  const len = word.length;  
  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (word[i] !== word[len - 1 - i]) {  
            console.log(false);  
        }
    }   
    console.log(true); 
}  

isPalindrome("racecar");
isPalindrome("book");


// Do not edit this line;
module.exports = isPalindrome;