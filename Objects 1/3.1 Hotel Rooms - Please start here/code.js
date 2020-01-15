function hotelRoom(capacity, price, number, booked) {
  this.capacity = capacity;
  this.price = price;
  this.number = number;
  this.booked = false;
}
// create a room with the abocve ctor
var room1 = new hotelRoom(2, 40, 305);
var room2 = new hotelRoom(2, 33, 55);
console.log(room1);

// checks the room cap price number status
hotelRoom.prototype.info = function() {
  var status = "";
  if (this.booked == false) {
    status = "vacant";
  } else {
    status = "booked";
  }
  console.log(
    "Room number " +
      this.number +
      " is " +
      status +
      " it costs " +
      this.price +
      " and can host up to " +
      this.capacity +
      " guests"
  );
};
// book a room
hotelRoom.prototype.book = function() {
  this.booked = true;
  console.log("Booking room number " + this.number);
};

// checkout of a room

hotelRoom.prototype.checkout = function() {
  this.booked = false;
  console.log(
    "Room number: " + this.number + " is no longer taken and now available"
  );
};

// change room price per night

hotelRoom.prototype.changePrice = function(newPrice) {
  var oldPrice = this.price;
  var newPrice = newPrice;
  this.price = newPrice;
  console.log(
    "The price of room number :" +
      this.number +
      " has change from " +
      oldPrice +
      " to " +
      newPrice
  );
};

// Task 6 - create 3 new rooms - num1 as double , num 2 as single num 3 as double
room1 = new hotelRoom(2, 50, 33);
room2 = new hotelRoom(1, 67, 30);
var room3 = new hotelRoom(2, 99, 45);
//Create a hotel object with props name , stars, rooms

// with ctor for hotel

// function buildHotel(name,stars,rooms){
//     this.name = name;
//     this.stars = stars;
//     this.rooms = rooms;
// }
// var hotel = new buildHotel("The old haunch", 4, [room1, room2, room3])
// console.log(hotel);

// buildHotel.prototype.info = function(){
//   console.log(this.rooms);
// }
// hotel.info();

// hotel as an object 

var hotel = {
    name: "An old Inn",
    stars : 3,
    rooms: [room1,room2,room3]
};

hotel.info = function(){
    console.log("Hotel info:")
    for(var i = 0; i < this.rooms.length; i ++){
        this.rooms[i].info();
    }
}

hotel.book =function(numberOfGuests){
    for(var i = 0; i<this.rooms.length; i++){
        var roomFound = false;

        if(!this.rooms[i]["booked"] && this.rooms[i]["capacity"] >= numberOfGuests){
            this.rooms[i].book();
            roomFound = true;
            break;
        }
        if(roomFound == false){
            console.log("Sorry, there are no rooms matching your query!");
        }
    }
};

hotel.checkout = function(roomNumber){
    for(var i = 0; i < this.rooms.length; i ++){
        if(roomNumber === this.rooms[i]["number"]){
            this.rooms[i].checkout();
            break;
        }
    }
}