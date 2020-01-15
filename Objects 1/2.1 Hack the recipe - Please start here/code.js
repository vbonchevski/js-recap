var recipe = {
    flour: {
        qty:200,
        unit:"g"
    },
    sugar: {
        qty:150,
        unit:"g"
    },
    butter: {
        qty:125,
        unit:"g"
    },
    milk: {
        qty:125,
        unit: "ml",
    },
    eggs: {
        qty:2,
        unit: "eggs"
    },
    vanilla: {
        qty: 1,
        unit: "teaspoon"
    },
    salt: {
        qty: 0.5,
        unit: "teaspoon"
    },
    bakingPowder:{
        qty: 2,
        unit: "teaspoon"
    }
}
console.log(recipe);

// alternative to the if else with an obj

var toAdd ={
    g: 10,
    ml: 15,
    teaspoon: 1,
    eggs: 1,
    unit: 1
}

var hackRecipe = function (ingredient){
     // get unit 
     var unit = recipe[ingredient].unit;
    //get qtyToadd
    var qtyToAdd = toAdd[unit];
   
    // if(unit === "g"){
    //     qtyToAdd += 10;
    // }
    // else if(unit === "ml"){
    //     qtyToAdd += 15;
    // }
    // else{
    //     qtyToAdd++;
    // }
    recipe[ingredient].qty += qtyToAdd;
    console.log("Added " + qtyToAdd +" "+ unit + " "+ ingredient);
    console.log(recipe);
}