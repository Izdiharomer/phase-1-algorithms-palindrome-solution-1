
function isPalindrome(str) {

  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

 
  let start = 0;
  let end = cleanStr.length - 1;

  while (start < end) {

    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }

  
    start++;
    end--;
  }


  return true;
}

/* 
  function isPalindrome(str):
    cleanStr = removeNonAlphanumeric(toLowerCase(str))
    start = 0
    end = length(cleanStr) - 1
    
    while start < end:
        if cleanStr[start] != cleanStr[end]:
            return false
        start = start + 1
        end = end - 1
    
    return true

*/

/*
  Add written explanation of your solution here
*/

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
