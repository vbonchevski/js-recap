function greet(language) {
  return function(name) {
    console.log(language);
    switch (language) {
      case "spanish":
        console.log("Hola " + name + " . " + " Bienvenido al museo");
        break;
      case "english":
        console.log("Hello " + name + " . " + " Welcome to the museum");
        break;
      default:
        console.log("Apologies I can only speak English and Spanish");
        break;
    }
  };
}

greet("english")("John");
greet("spanish")("Pablo");
greet("Danish");

function greetVid(language) {
  if (language.toLowerCase() === "spanish") {
    return function(name) {
      return "Hola " + name + " . " + " Bienvenido al museo";
    };
  } else if (language.toLowerCase() === "english") {
    return function(name) {
        return "Hello " + name + " . " + " Welcome to the museum";
    };
  } else {
    return function(name) {
        return "Apologies I can only speak English and Spanish";
    };
  }
}

// Hola customerName! Bienvenido al museo!

// Apologies I can only speak English and Spanish

// Hello customerName! Welcome to the museum
greetVid("english")("John");
greetVid("spanish")("Pablo");
greetVid("Danish");