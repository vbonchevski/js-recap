//create the hotel objects
var hotel1 = {
    name: "Forest view Hotel",
    price: 51,
    distance: 6.8
};
var hotel2 = {
    name: "OYO Abbey Hotel",
    price: 52,
    distance: 3.7
};
var hotel3 = {
    name: "Camden Belmont",
    price: 69,
    distance: 2.8
};
var hotel4 = {
    name: "St Athans Hotel",
    price: 74,
    distance: 1.2
};
var hotel5 = {
    name: "St Giles London",
    price: 139,
    distance: 0.7
};
var hotel6 = {
    name: "Ashburn Hotel",
    price: 153,
    distance: 2.6
};
// initialize the hotel list array
var hotelList = [hotel1, hotel2, hotel3,hotel4,hotel5,hotel6];
var result = "Here is the list of available hotels: ";
// for(i = 0; i < hotelList.length; i++){
//     result += `\n Hotel: ${hotelList[i].name} \n price ber night:${hotelList[i].price} \n It is ${hotelList[i].distance}km away from the center`;
// }

console.log(result);

var budget = parseInt(prompt('Please enter your budget per night'));
var distance = parseFloat(prompt("Please enter the maximum distance away from the city center you prefer in km:"));
var result ='';
var counter = 0;
console.log(budget);
console.log(distance);

for(i=0; i<hotelList.length; i++){
   if(hotelList[i].price <= budget && hotelList[i].distance <= distance){
        counter ++
        result += "\n Hotel:" + hotelList[i].name +"\n price per night: " + hotelList[i].price
        + ", distance from center" + hotelList[i].distance +" km"; 
        
   }else if(counter = 1){
        console.log("there's only 1 hotel matching your search");
   }
   else{
        console.log("No hotels matching your search!")
   }
}

console.log(result);
