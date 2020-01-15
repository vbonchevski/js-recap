// // prompt

// var x = prompt("Please enter your age");
// x = parseInt(x);

// console.log(typeof x);
// console.log(x);

// // alert 

// alert("Hello!"); 

// // both of the above are attached to the global object - window , fx. window.alert / window.prompt() etc . 

// // eval 

// eval("var a = 1;"); // will output 1 when console logged the var a like below :

// console.log(a);

var x = 0;

function count(){
    console.log(x);
    x++;
// clearinterval
    if(x==10){
        clearInterval(counter); // stops the setInterval fn when it reaches the above condition x ==10
    }
};
// setinterval function takes a function and a time in ms  so every 1s as the below you get the count function
var counter = setInterval(count,1000);

// setTimeout

setTimeout(function(){
    console.log("Hey I'm a setTimeOut")
},1500)