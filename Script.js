function RPS(UserChoice, ResUserChoice){
    var UserChoice = prompt("Pick [0]Rock , [1]Paper, [2]Scissors: ");
    var ResUserChoice = "";
    if (isNaN(parseInt(UserChoice))){
        if (UserChoice.toUpperCase()===("ROCK")){
            ResUserChoice = UserChoice.toLowerCase();
            UserChoice = "0";
        }
        else if (UserChoice.toUpperCase()===("PAPER")){
            ResUserChoice = UserChoice.toLowerCase();
            UserChoice = "1";
        }
        else if (UserChoice.toUpperCase()===("SCISSORS")){
            ResUserChoice = UserChoice.toLowerCase();
            UserChoice = "2";
        }
    }
    else{
        while((0> parseInt(UserChoice)) || (2< parseInt(UserChoice))){
            UserChoice = prompt("Pick [0]Rock , [1]Paper, [2]Scissors: ");
        }
        if (UserChoice == 0 ){
            ResUserChoice = "Rock";
        }
        else if (UserChoice == 1 ){
            ResUserChoice = "Paper";
        }
        else if (UserChoice == 2 ){
            ResUserChoice = "Scissors";
        }
    }
    return UserChoice+ResUserChoice
}

function CompChoice(){
    var ResComputerChoice = "";
    if (ComputerChoice == 0 ){
        ResComputerChoice = "Rock";
    }
    else if (ComputerChoice == 1 ){
        ResComputerChoice = "Paper";
    }
    else if (ComputerChoice == 2 ){
        ResComputerChoice = "Scissors";
    }
    return ResComputerChoice
}

let UserPicks = RPS();
UserChoice = parseInt(UserPicks[0]);
ResUserChoice = UserPicks.slice(1);


var ComputerChoice = Math.floor(Math.random() * 3);
ResComputerChoice = CompChoice();

console.log("User Choice is: "+ ResUserChoice);
console.log("Computer Choice is: "+ ResComputerChoice.toLowerCase());


if ( ComputerChoice === UserChoice){
    console.log("Draw");
}
else if ((ComputerChoice == 0) && (UserChoice == 1)){
    console.log("User Won");
}
else if ((ComputerChoice == 1) && (UserChoice == 2)){
    console.log("User Won");
}
else if ((ComputerChoice == 2) && (UserChoice == 0)){
    console.log("User Won");
}
else{
    console.log("Computer Won");
}


