// Challenge num 4 
var mark1 = parseInt(prompt('Please enter your first exam\'s mark here:'));
var mark2 = parseInt(prompt('Please enter your 2nd exam\'s mark here:'));
var mark3 = parseInt(prompt('Please enter your 3rd exam\'s mark here:'));
var mark4 = parseInt(prompt('Please enter your 4th exam\'s mark here:'));
var mark5 = parseInt(prompt('Please enter your 5th exam\'s mark here:'));



var pass1 = mark1 >= 60 ? 1 : 0;
var pass2 = mark2 >= 60 ? 1 : 0;
var pass3 = mark3 >= 60 ? 1 : 0;
var pass4 = mark4 >= 60 ? 1 : 0;
var pass5 = mark5 >= 60 ? 1 : 0;

var average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;

average = average.toFixed(2);
console.log(`Your average is : ${average}`)
console.log(average);

var numModulesPassed = pass1+pass2+pass3+pass4+pass5;

console.log(numModulesPassed+ " Passed modules")

var scorePass = average >= 60;
console.log(scorePass);
var modulesRequired = numModulesPassed > 3 ;
console.log(modulesRequired);

var youPass = modulesRequired  && scorePass ? true : false;
var result = youPass  ? "You Passed !" : "You Failed";



console.log(youPass + "this");

console.log(result);



