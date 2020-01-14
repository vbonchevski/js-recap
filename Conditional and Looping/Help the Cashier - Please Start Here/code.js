//help the cashier return the right of change

//Programme input:

//Amount due
var total = prompt("Total due:");

//Amount paid by the customer
var moneyPaid = prompt("Amount paid:");

//convert collected values to float numbers. Make sure the decimal part has two digits only.
total = parseFloat(total).toFixed(2);
moneyPaid = parseFloat(moneyPaid).toFixed(2);

//Programme output:

//calculate the change amount.Make sure the decimal part has two digits only.
var change = (moneyPaid - total).toFixed(2);

//Print the amount due/ amount paid/ change
console.log(
  "Due: £" + total + "/ Paid: £" + moneyPaid + "/ Change: £" + change
);

//Print change breakdown: notes and coins
 // with a for loop solution
var note_coins = [
  { value: 50, name: "£50 notes: ", return: 0 },
  { value: 20, name: "£20 notes: ", return: 0 },
  { value: 10, name: "£10 notes: ", return: 0 },
  { value: 5, name: "£5 notes: ", return: 0 },
  { value: 2, name: "£2 coins: ", return: 0 },
  { value: 1, name: "£1 coins: ", return: 0 },
  { value: 0.5, name: "50p coins: ", return: 0 },
  { value: 0.2, name: "20p coins: ", return: 0 },
  { value: 0.1, name: "10p coins: ", return: 0 },
  { value: 0.05, name: "5p coins: ", return: 0 },
  { value: 0.02, name: "2p coins: ", return: 0 },
  { value: 0.01, name: "1p coins: ", return: 0 }
];


// for(i=0; i<note_coins.length; i++){
//     note_coins[i].return =Math.floor(change / note_coins[i].value);
//     change = (change % note_coins[i].value).toFixed(2);
//     note_coins[i].return > 0 ? console.log(note_coins[i].name + note_coins[i].return) : 0;
// }
var i=0;
while (change > 0) {
    note_coins[i].return =Math.floor(change / note_coins[i].value);
    change = (change % note_coins[i].value).toFixed(2);
    note_coins[i].return > 0 ? console.log(note_coins[i].name + note_coins[i].return) : 0;
    i++;
    
}