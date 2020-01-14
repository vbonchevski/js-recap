// function that should take hotel price per night float
// duration of stay in days (int)
// flight cost - float
// budget available - float

function totalVacationCost(pricePerNight, days, flightCost, budgetAvailable){
    console.log("Start function")
    var expenses = (pricePerNight*days ) + flightCost;
    console.log(expenses);
    var result;
    if(budgetAvailable < expenses){

        console.log("Change your plans , you cannot afford it")
         result ="Can't Go";
    }
    else{
        console.log("Let'\s go take that trip!")
         result = "Let's go"

    }
    return result;
}
