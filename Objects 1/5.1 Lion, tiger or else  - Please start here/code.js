var alphabets = "abcdefghijklmnopqrstuvwxyz";

var extractLetters = function(name) {
  name = name.toLowerCase();
  var result = "";
  for (var i = 0; i < alphabets.length; i++) {
    if (name.includes(alphabets.charAt(i))) {
      result += alphabets.charAt(i);
    }
  }
  return result;
};

// create calculateMatch

var calculateMatch = function(letters, animal){
    var length = letters.length;
    var match = 0;
    for(var i = 0; i < length; i ++){
        if(animal.includes(letters.charAt(i))){
            match ++;
        }
    }
    return (match/length * 100).toFixed(2) + '%';
};

//Task . 3 create animals array

var animals = ['tiger','lion','camel', 'rabbit', 'sheep'];


var calculateMatches = function(name){
    var letters = extractLetters(name);
    console.log(letters);
    var result = {};
    for(var i = 0; i<animals.length; i++){
        var propName = animals[i];
        result[propName] = calculateMatch(letters,animals[i]);
    }
    result = JSON.stringify(result);
    return result;
}

// var calculateMatches = function(name){
//     var letters = extractLetters(name);
//     console.log(letters);
//     var result = {};
//     for(var i = 0; i < animals.length; i ++){
//         //adding a property with a name equal to the animal at position i inside the array animals
//         var propertyName = animals[i];
//         //value of that property is the percentage of alpahbets inside letters which are included inside the animal
//         result[propertyName] = calculateMatch(letters, animals[i]);
//     }
//     //Task 5: return a JSON string
//     result = JSON.stringify(result);
//     return result;
// };