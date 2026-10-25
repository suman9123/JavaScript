// javascript have 3 types of veriable const, let, var 

const accountId = 12345;

let gmail = "suman@gmail.com" ; 

var accountName = "suman";  // prefer not to use var in js

accountCity = "kolkata" ;  // this is possible but not a good way to use

let accountState;   // we can use without data ,in terminal it will return Undefined


/*
we are not use var cz of issue in block scope and functional scope
*/

//accountId = 2;  [this is not possible because we can't change const data]

gmail = "sc@gmail.com";
accountName = "Bristhi";
accountCity = "Delhi";

console.log(accountId);
 

// in this situation every data was change cz we reassign the value

console.table([accountId, gmail, accountName, accountCity, accountState])


