var totalVotes = 0;

var player1 ={
    name: "Nadal",
    votes: 0
}
var player2 ={
    name: "Djokovic",
    votes: 0
}

function vote(player){
   player.votes++
   totalVotes++
}

while (totalVotes < 10) {
    
    var voteFor =  parseInt(prompt("Please vote 1 for Nadal and 2 for Djokovic"))
    if(voteFor == 1){
        vote(player1);
    }
    else if(voteFor == 2){
        vote(player2);

    }
    else {
        console.log("Please vote for either 1 Nadal or 2 Djokovic");
        voteFor =  parseInt(prompt("Please vote 1 for Nadal and 2 for Djokovic"))
    }
    
    

}

if(player1.votes == player2.votes){
    console.log("Nobody wins" + player1.name + player1.votes + "\n" + player2.name + player2.votes )
}
else if(player1.votes > player2.votes){
    console.log(player1.name + "wins with :" + player1.votes + " votes .");
    console.log(player2.name + "loses with :" + player2.votes + " votes .");

}
else if(player2.votes > player1.votes){
    console.log(player2.name + "wins with :" + player2.votes + " votes .");
    console.log(player1.name + "loses with :" + player1.votes + " votes .");
    
}