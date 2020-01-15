// Design pattern - recursion

var factorial = function(n){
    var result = 1;
    for(i=n; i>0;i--){
        result*=i;
    }
    return result;
}

console.log(factorial(3)); // 1*2*3 in this case it's 3 * 2*1 

// factorial(n) = n*factorial(n-1);

var factorial = function(n){
    if(n==1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

// factorial(n) = n * (n-1) * factorial(n-2)
// ... factorial(1)

