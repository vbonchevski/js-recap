//help the cashier return the right of change


//Programme input: 
    //Amount due
    //Amount paid by the customer

    var amountDue = parseInt(prompt('Please enter the amount DUE here : '));
    var amountPaid = parseInt(prompt('Please enter the amount PAID'));


//Programme output:
    //Print change amount
    //Print change breakdown: notes and coins

    var change = (amountPaid - amountDue).toFixed(2);
    console.log(change);

//UK Example: 
    //Banknotes:
    //£50 - £20 - £10 - £5
    //Coins:
    //£2 - £1 - 50p - 20p - 10p - 5p - 2p - 1p
    var note_coin;

//£50 note
note_coin = {
    value: 50,
    name: '£50 notes: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£20 note
note_coin = {
    value: 20,
    name: '£20 notes: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£10 note
note_coin = {
    value: 10,
    name: '£10 notes: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£5 note
note_coin = {
    value: 5,
    name: '£5 notes: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£2 coin
note_coin = {
    value: 2,
    name: '£2 coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//£1 coin
note_coin = {
    value: 1,
    name: '£1 coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//50p coin
note_coin = {
    value: 0.50,
    name: '50p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//20p coin
note_coin = {
    value: 0.20,
    name: '20p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//10p coin
note_coin = {
    value: 0.10,
    name: '10p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//5p coin
note_coin = {
    value: 0.05,
    name: '5p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//2p coin
note_coin = {
    value: 0.02,
    name: '2p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

//1p coin
note_coin = {
    value: 0.01,
    name: '1p coins: ',
    return: 0
};
note_coin.return = Math.floor(change/note_coin.value);
change = (change%note_coin.value).toFixed(2);
note_coin.return > 0 ? console.log(note_coin.name + note_coin.return): 0;

console.log((50-44.44).toFixed(2));
var x = prompt('message');





