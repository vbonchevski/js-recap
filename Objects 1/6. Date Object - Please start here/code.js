// current dateTime

var x = new Date(); // gets curent DateTime
console.log(x);

// Date object with params 
// choosing specific date and time
// YY MM Date hours mins seconds milliseconds
// if only 2 args are providedd the rest is considered 0
// if its the day as 0 you get 1 as day  
x = new Date(2017,11,11,15,10,0,0);
console.log(x);

// use an integer value number of milliseconds 

x = new Date(1049591421); // ms since 1st Jan 1970 in UTC
console.log(x);

// opposite go form date to numeric value 

console.log(x.getTime());
// numeric value corresponding to the current time
var y = Date.now();
console.log(y);

// return the day of the week for a specific date 


// get day of the week 

// get the day of your birthday 

var ze = new Date();
var year = prompt("Please provide your year of birth: ");
var month = prompt("Please provide your month of birth: ");
var day = prompt("Please provide your day of birth: ");
var daysNumbers = [0,1,2,3,4,5,6];
var weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var bornOn = new Date(year,month,day);
var dai = bornOn.getDay();

console.log("You were born on a " + weekdays[dai]);

// craete new date object
var now = new Date();