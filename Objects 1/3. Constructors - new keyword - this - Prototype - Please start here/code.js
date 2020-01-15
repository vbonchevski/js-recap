// generic object ctor

var myPhone = new Object();

//the above is same as if :

myPhone.make = "A make";
myPhone.model = "A model";
myPhone.warranty = 11;
myPhone.color = "Colorful";
console.log(myPhone);

// constructors

function phone(make, model, warranty, color) {
  this.make = make;
  this.model = model;
  this.warranty = warranty;
  this.color = color;
}
// build the phone with the ctor above

var newPhone = new phone("Apple","5S", 12,"purple");
console.log(newPhone);

console.log(newPhone.warranty);

// add new prop to phone

console.log(newPhone);

var anotherPhone = new phone("Apple","5S", 12,"purple");
console.log(anotherPhone);

// add new prop to all phones 
console.log(phone.prototype);
phone.prototype.ring = function() {
    console.log("Rings !")
};
phone.prototype.extendWarranty = function(x){
    this.warranty +=x;
}

phone.prototype.condition = "new";

// another object after prototypes 

var myBroPhone = new phone("Samsung","galaxy 1", 12,"silver");
console.log(myBroPhone);
myBroPhone.ring();
myBroPhone.extendWarranty(3);
console.log(myBroPhone.warranty);
console.log(myBroPhone.condition);