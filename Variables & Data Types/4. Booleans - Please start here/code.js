// booleans 

var x = 5 ;
var y = 7;

var z = x<y;

console.log(z); // returns true;

// logical operators start 

z = (x < y) && (x > 0); // both must be true to get true 
console.log(z);

z = false || true; // only 1 condition needs to be true to get true  if both are false you get false 

z = !false // this is true as !false is opposite of false meaning true 

// operators precedence 

z = false && true || true ; // false and true will give us true && is stronger than or - tthis returns true 
console.log(z);

// ternary operator ? true : false for example 

z = x > 4 ? 2 : "not true";

console.log(z);

// logical operators with  bool vs non bool

z = true && true // retursn true 

z = 1 && 'apple' // returns apple  - 1 is returned as true 
console.log(z)

var fruit;
z = fruit || 'apple' // returns apple as fruit is undef
z = '' || 'apple' // returns apple as '' is empty meaning it has length of 0 ;
z = '' && false // returns '' as they're both false  when we have && with non bool elements if the first is non bool and the 2nd is non bool we get the first one 

console.log(z);


// logical operators end 