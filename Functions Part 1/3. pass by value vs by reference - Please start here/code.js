var a =1 ;
var b = a ; // b is 1 
a++;

console.log(a);
console.log(b);

var house1 = {
    type: "terraced",
    town: "Cambridge"
}

var house2 = house1;

house1.town ="London";
console.log(house1);

console.log(house2);

var c = 1;

// function that adds one to x 

function addOne(x){
    x++;
}

addOne(c);
console.log(c);

function add1(){
    c++;
}
add1();
console.log(c);


// passing by reference 
var person1 = {
    name: 'Mike',
    age: '21',
    
}
var person2 = person1;

function addYear(person){
    person.age ++;
}
addYear(person1);

console.log(person1);
console.log(person2);