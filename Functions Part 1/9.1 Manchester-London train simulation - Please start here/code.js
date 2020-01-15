// 12 stops total including the departure and arrival stops - 0 and 11 i think

// the journey shows stations and the stop min at that station - so min that the train stays there in minutes

var journey = [
  { stop: "Manchester Piccadilly", min: 0 },
  { stop: "Stockport", min: 11 },
  { stop: "Wilmslow", min: 23 },
  { stop: "Crewe", min: 29 },
  { stop: "Stafford", min: 37 },
  { stop: "Lichfield Trent Valley", min: 50 },
  { stop: "Tamworth", min: 65 },
  { stop: "Rugby", min: 88 },
  { stop: "Northampton", min: 103 },
  { stop: "Milton Keynes Central", min: 103 },
  { stop: "Watford Junction", min: 125 },
  { stop: "London Euston", min: 140 }
];

var counter = 0;

var setCounter = setInterval(journeyCurrentTime, 100);

function checkStations(time) {
  for (i = 0; i < journey.length; i++) {
    if (time == journey[i].min) {
      var calling = "Stopping at ";
      if (i===0) {
        calling = "Departing from : ";
        console.log(
          calling + journey[i].stop + " " + convertTime(counter) + "."
        );
      } else if (i === journey.length -1) { // checks the last index
        calling = "Arriving at :";
        console.log(
          calling + journey[i].stop + " " + convertTime(counter) + "."
        );
      } else {
        console.log(
          calling + journey[i].stop + "." + " at " + convertTime(counter) + " "
        );
      }
    }
  }
}
function journeyCurrentTime() {
  checkStations(counter);
  console.log(convertTime(counter));
  counter++;
  if (counter == 141) {
    clearInterval(setCounter);
  }
}

// create addZero fn which adds a zero if under 10 min

var addZero = function(min) {
  if (min < 10) {
    return "0" + min;
  } else {
    return min;
  }
};

// The train always departs from Manchester at 2 PM / 14:00

var convertTime = function(min) {
  if (min < 60) {
    return "14:" + addZero(min);
  } else if (min < 120) {
    min -= 60;
    return "15:" + addZero(min);
  } else {
    min -= 120;
    return "16:" + addZero(min);
  }
};

var convertTime2 = function(min) {
  var departH = 14;
  var departM = 0;
  // depart converted to minutes
  var departConverted = departH * 60 + departM;
  // output in minutes
  var convertedM = departConverted + min;

  // output in hh:mm
  var hours = Math.floor(convertedM / 60);
  var minutes = convertedM % 60;
  return hours + ":" + addZero(minutes);
};
