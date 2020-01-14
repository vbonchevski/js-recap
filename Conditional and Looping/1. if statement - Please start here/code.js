// if statement

var balance = 1000;
var price = 50;

function purchase(balance,price){
    
if(balance >= price){
    balance - price;
    console.log(balance);
    return balance;
}
else{
    console.log("You do not have enough money");
}
}

purchase(100,30);

purchase(10,30);

// Check speed

function checkSpeed (speed){
    if(speed>70){
        console.log("Speed is above 70 , currently :" + " " + speed)

    }else if(speed<50){
        console.log("Speed is below 50 , currently :" + " " + speed)
        
    }
    else{
        console.log("Speed is between 50 and 70 , currently : " + " " + speed);
    }
}

checkSpeed(30);
checkSpeed(60);
checkSpeed(90);