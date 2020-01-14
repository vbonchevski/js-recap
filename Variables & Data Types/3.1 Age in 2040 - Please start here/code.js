var firstName = prompt('Please enter your first name :');
var lastName = prompt('Please enter your last name :');
var birthYear = prompt('Please enter your year of birth:');

var firstSentence = `Hello ${firstName} + ${lastName} .`;

parseInt(birthYear);

// from the video 

// birthYear = parseInt(birthYear) - this is not used by myself on the first try 

var userCurrentAge = 2020 - birthYear;
var userFutureAge = 2040 - birthYear; 



var secondSentence = `Your current age is ${userCurrentAge}. You will be ${userFutureAge} years old in 2040`;

var result = firstSentence + "\n" + secondSentence;

console.log(result);

result += ' I wish you a long and happy life';

console.log(`This is after the addition ${result}`);

