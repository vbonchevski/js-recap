// check if a number is prime or not 


// 1. prompt the user to input a whole number 


// 2. if the user does not provide a whole number , keep prompting the use to input a valid number until they provide one 
// using a while loop 

// 3 if the number is prime print number is prime

// otherwise print the number is not prime and print its smallest positive divisor other than 1 



// a number is prime if it can be divided by 1 and itself only
// 0 not prime , negative numbers are not prime either

// all numbers <= 1

// check if our number can be divided other than 1 and itself 
var number;
do {
    number = prompt("Please enter a whole number");
    number = parseInt(number);
} while (!Number.isInteger(number));

function isPrime(n){
    if(n<=1){
        return false;
    }else if(n==2){
        return true;
    }
    else {
        // for(i=2;i<n;i++){
        //     if(n%i ==0){
        //         console.log(n + " Is not a prime number, and can be divided by : " + i);
        //         return;
        //     }
        // }
        var i = 2;
        while (i<n && (n% i != 0)) {
            i++
        }

            if(i==n){
                return true;
            }
            else{
                // not prime
                console.log(n+ " Not a primary number , it can be divided by : " +i);
            }
        // console.log(n + " Is a prime number")
    }
}

// calc the number of prime numbers smaller than number and print them

findSmallerPrimes(number);
// max is the number from the user
function findSmallerPrimes(max){
    var counter=0;
    var prime_numbers='';
    var i = 2; // smallest prime number to start for the while loop
    while (i<=max) {
        if(isPrime(i)){
            counter ++;
            prime_numbers += i + ', ';
        }
        i++;
    }
    console.log("There are " + counter +" of Prime numbers smaller than " + max + ".");
    if(counter > 0 ){
        console.log(prime_numbers);
    }
};