var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    colour: "gold",
    ring: function(){
        console.log("beep beep beep!")
    }
};
console.log(myPhone.make);
console.log(myPhone["make"]); // same as above

var x = "make";
console.log(myPhone.x) //undefined
console.log(myPhone[x]);


// create a fn that returns a random property of myphone

function getProperty(){
    var properties = ['make','model','warranty','colour','ring'];

    // for(i=0;i<properties.length;i++){

    // }

    var index = Math.floor(4*Math.random());
    console.log(index)
    property = properties[index];
    return property + ": " + myPhone[property];
}