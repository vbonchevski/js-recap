var dayOfTheWeek = prompt("Please enter any day monday to sunday here:");
dayOfTheWeek = dayOfTheWeek.toLowerCase();

switch (dayOfTheWeek) {
  case "monday":
      console.log("Today is Monday")
    break;
  case "tuesday":
      console.log("Tuesday now")
    break;
  case "wednesday":
      console.log("Wednesday is today")
    break;
  case "thursday":
      console.log("It is Thursday today.")
    break;
  case "friday":
      console.log("It is Friday - hooray!")
    break;
  case "saturday":
    console.log("Weekend day , it'\s sunday ")
    break;
  case "sunday":
    console.log("Weekend day , it'\s sunday ")
    break;

  default:
      console.log("Please reload the page and enter a valid day of the week in ENGLISH")
    break;
}
