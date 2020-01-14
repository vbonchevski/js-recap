// prompt users to input activities with their duration in hours with decimal numers , so floats 3.5 fx

// it will keep asking for info until the 24h schedule is fully booked ,so maybe a var = 24

// then it will show activities with corresponding duration

var result = "Activity - Duration";

var remainingTime = 24;

while (remainingTime > 0) {
  var activity = prompt("Please enter an activity name here: ");
  
  var duration;
  do {
    duration = prompt("Please enter the hours needed for the activity, you've got " + remainingTime + "Left")
    duration = parseFloat(duration);
  } while (duration > remainingTime);
  
  // update remaining time
  remainingTime -= duration;
  result += "\n " + activity + "-" + duration +"hrs";

}
console.log(result);