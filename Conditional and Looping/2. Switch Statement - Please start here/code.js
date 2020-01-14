// Switch statements

var userInput = prompt("Please enter a season : ");
console.log(userInput)
userInput = userInput.toLowerCase();
console.log(userInput)

switch (userInput) {
  case "spring":
    console.log("It is Spring .");

    break;
  case "summer":
    console.log("It is Summer .");
    break;
  case "autumn":
    console.log("It is Autumn .");

    break;
  case "winter":
    console.log("It is Winter .");
    break;

  default:
      console.log("No Season found")
    break;
}
