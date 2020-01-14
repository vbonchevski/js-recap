// null and undefined;

var x ; // 
console.log(x); // undefined

console.log(typeof x) // undefined

var y = null ; // null can be assigned as a presentation of no value 

console.log(y);
console.log(typeof y) // returns object

// type coercion

var z = "1" + 2;

console.log(z);
console.log(typeof z);

z = "1" -5 ;

console.log(z);
console.log(typeof z);

z = "uno" -5 ;

console.log(z);
console.log(typeof z);

z = 2*null;
console.log(z);
console.log(typeof z);

console.log(0==false); // 0 is always false and this will return true - is false equal to false - yes it is 
console.log(""==false);
console.log(null==false); // null is not false unless we use it some how same for undefined
console.log(undefined==false);

// undefined == null
console.log(undefined == null) // true 
console.log(undefined == undefined) // true 
console.log(null == null) // true 

// NaN to NaN
console.log(NaN == NaN) // false 


