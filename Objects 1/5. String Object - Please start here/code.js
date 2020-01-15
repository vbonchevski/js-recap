// String Object
var myString1 = "Javascript";
var myString2 = " is awesome";
var myString3 = "Java";
var myString4 = "This is another sentence , fun right";

// character at position 0 

console.log(myString1.charAt(0)); // J at string1 is the first index  

// concatinate 2 strings 

console.log(myString1.concat(myString2)) // concats both strings

console.log(myString1.includes(myString3)); // true Java is in JavaScript as a string

console.log(myString1.indexOf("a")); // prints 1 
console.log(myString1.lastIndexOf("a")) // prints 3 , 0J1a2v3a -- last string is at 3 
console.log(myString3.toUpperCase);

// convert string obj to a primitive
var y = new String("The variable why ? ");

console.log(y);
y = y.toString(); // changes to primitive;
console.log(y);


