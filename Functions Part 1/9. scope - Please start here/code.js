//This is an introduction to scope. More details can be found in the advanced sections.

// global variable , i.e. it's outside all functions 
var a = 1;
// a can be accessed from inside a function or anywhere in the code the above a 
function f(x){
    return x+a;
}

console.log(f(2)); // 2+a = 3
// if you define a again inside a fn() then the function will use that one instead of the global one above on ln4
function f2(x){
    var a = 2;
    return x+a;
}

console.log(f2(3)); // 2+a = 5;
// if a is not found in the scope of the fn  but found in the params 
// then the param value is going to be used 
function g(a){
    return a+3;
    var a = 10;  // this will not execute , if it's the opposite we've defined a once more and we'd be using a = 10 , in a + 3 = 10 +3 = 13
}

console.log(g(5)); // returns 8 because a is the param and it is 5 in this case + 3 in the return = 8 

//
function h(x){
    // var c = 2;
    return x + c; // cannot use c if it's not defined
}
console.log(h(2)); // returns NaN due to c being initialized after the call of the function here

var c = 3;
console.log(h(2)); // c is now defined and we're calling it after initializing C  - meaning it will not be undef and not return Nan
