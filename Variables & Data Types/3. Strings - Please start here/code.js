// Strings 

var job = "Developer";


var town = "Coventry";


// escape the normal processa and treat quotation marks as punctioation marks
var greeting = `Hello , I'\m glad to see you`;

var quote = "This is \n a new line"; // 
console.log(quote);

quote = "Here is \t a tab";

console.log(quote);

// Concatenation

var firstName = 'Bill';
var lastName = 'Gates';

var fullName = firstName + " " + lastName + " .";

console.log(fullName);

// methods that work with prmitive types and object types 

// object types will be covered later 

console.log(fullName.length);

var appleVar = 'apple';

console.log(appleVar.charAt(3)) // returns character at 3rd index/position; - starts at 0 

console.log(appleVar.indexOf('e'));// returns the index of the letter/string
console.log(appleVar.indexOf('p'));// same as above returns the first p - if you need the 2nd/last one do the below

console.log(appleVar.lastIndexOf('p')) // returns the position of the last 'p' character in the word/string ; 


