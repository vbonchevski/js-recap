// Equality bitch

// primitives 

var x = 1;
var y = 1;
console.log(x == y) // prints true they point to the same ref

// objects 

var myPhone = {
    make: "This",
    model: "5S",
}
var myPhone2 = {
    make: "This",
    model: "5S",
}

console.log(myPhone == myPhone2); // false as they're objects and currently are not pointing to the same point of memory

var myPhone3 = myPhone

console.log(myPhone == myPhone3) // true - pointing to the same memory ref;

// Strings 

var namePrimitive = "mark";
var namePrimitive2 = "mark";
var nameObject1 = new String("mark"); // it's an object due to using the ctor new String()
var nameObject2 = new String("mark");

console.log(typeof namePrimitive); // string
console.log(typeof nameObject1); // object

// check if the primitives match 
console.log(namePrimitive === namePrimitive2) // true as they're primitives with same value 

console.log(nameObject1 === nameObject2) // false , they're strings but objects hence not the same reference 
