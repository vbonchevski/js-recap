// While Loops 

var balance = 1000;
var itemNumber = 0;

while (balance > 0) {
    var itemPrice = Math.floor(1 + 100*Math.random());

    if(itemPrice <= balance ){
        itemNumber +=1;
        balance -= itemPrice;

        console.log(itemNumber + " . Item price: $ " + itemPrice +".");

        console.log("\n Balance is: $" + balance);

    }
}