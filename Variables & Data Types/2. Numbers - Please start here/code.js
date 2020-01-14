// primitive data type cannot accept any property or method attached to it 

var y = 1;



var z = 5.3e8;

// max min in JS

var max = Number.MAX_VALUE;
var min = Number.MIN_VALUE;

console.log(`this is z : ${z}`)

console.log(`Max  value ${max} and min value ${min}`)


// arithmetic operations

var a = 1+2;
var b = 2-1;

a = y - b;

console.log(a);

// Operator precedence

var c = 4 * 5 - 3;


console.log(c); // multiplication happens first then subtraction this is what an operator precedence means

 var d = 3 *(3+2); // in this case multiplication will happen after the addition due to the parentheses

 console.log(d);

 var incremented = ++c;
 console.log(incremented);


 // remainder operator

 var remainder = 12 % 5;
 console.log(remainder);