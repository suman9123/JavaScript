// Write a function that checks whether a string is a palindrome.

function palindromCheck (str) {
    let lowStr = str.toLowerCase();
    let len = lowStr.length;

    for(let i = 0 ;i<=len-1 ;i++){
        if(lowStr[i]===lowStr[len-1-i])
            return true

        else
            return false
    }
} 

console.log("this is palindrome String - ",palindromCheck("madaM"));

console.log("this is palindrome String - ",palindromCheck("12323"));
