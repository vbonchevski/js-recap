var mWorldchamp = {
    name: 'Usain',
    year: 2009,
    time: 9.58
}
var feWorldChamp = {
    name: 'Florence',
    year: 1988,
    time: 10.49
}

const user = {

};

user.gender = prompt('Please enter your gender').toLocaleLowerCase();

console.log(user.gender);

user.time = parseFloat(prompt('Please enter your time here using numbers , you can also use the decimal point ( . ) to separate '));

console.log(user.time);

console.log(user);
if(user.gender === 'male'){
    console.log('Male ');
        if(user.time < mWorldchamp.time){
            console.log("You've won")
        }else{
            console.log("Not close");
        }
}
else if(user.gender === 'female'){
    console.log('female!');
    if(user.time < feWorldChamp.time){
        console.log("You win!")
    }
    else{
        console.log("You don't win");
    }
}