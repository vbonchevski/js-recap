// objects are collections of props 

var myPhone = {
    model: 'Xiaomi',
    cost : 100,
    warranty : 12,
    color: 'blue',
    smart : true
}

console.log(myPhone.smart);
console.log(myPhone.color);
// change prop
myPhone.model = 'Iphone';

console.log(myPhone.model);

// add prop 

myPhone.storage = "64";
console.log(myPhone);
console.log(myPhone);
// delete prop

delete myPhone.storage;

console.log(myPhone);

// something interesting 

var x = 1 ;
var y = x; // y stores x - value as 1 
x = 2 ;

console.log(y)// 1 , because y is the value of x before changing it 

// Objects again 

var myOtherPhone = myPhone;
console.log(myOtherPhone)


// change myPhone obj 

myPhone.color ="gray";

console.log(myPhone);
console.log(myOtherPhone);