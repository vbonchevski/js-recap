//1st class functions

// store a value inside a variable

// function sum(a,b){
//     return a+b;
// }
// store functions inside of variables 
var summarize = function sum(a,b){
    return a+b;
};

console.log(summarize(1,3));

var myPhone = {
    make: "Apple",
    model: "5S",
    warranty: 12,
    color: "white",
    showWarrantyDetails: function(){
        console.log("This phone has " + this.warranty + " Months of warranty");
    }
}


myPhone.showWarrantyDetails();

// pass a value to functions 

function f(x){
    // return Math.pow(x,2);//
    return x*2;
}

console.log(f(3)); // returns square of any number in f(number)

function g(myFunction, a, b){
    return myFunction(a) + myFunction(b)
}
console.log(g(f,3,4));

// fn returning a fn

function add(number){
    return function(a){
        return a + number;
    }
}

var addOne = add(1);
console.log(addOne(3)); // gives 4 because ita dds 1 to 3 

var addTwo = add(2);
console.log(addTwo(3)); // gives 5 because it adds 2 to 3