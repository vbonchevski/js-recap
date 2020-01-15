// Fibonacci bees

// not fertilized - male bee - drone 

// fertilized - female bee - worker bee - 2 parents queen and male 

// parents :

// male bee - has only 1 parent - queen

// queen has male bee and queen 2nd gen

// build the parent fn


var parent = function(n){
    if(n===0){
        return 1;
    }
    else if(n===1){
        return 1;
    }
    else{
        return parent(n-1) + parent(n-2);
    }
};

// find the generation containing more than 1k great grandparents

var numberOfGrandparents = 0;
var currentGen = 0;
while (numberOfGrandparents < 1000) {
    // move to the next gen 
    currentGen++;
    //calc num of grandparents for that gen

    numberOfGrandparents = parent(currentGen);
}

console.log("The nearest generation containing more than 1K n-grandparents is gen number: " + currentGen +" .");