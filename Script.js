function game(){
    console.log("                ");

    function userPlay(){
        var UserChoice = prompt("Pick [0]Rock , [1]Paper, [2]Scissors: ");
        var playerSelection = "";
        if (isNaN(parseInt(UserChoice))){
            if (UserChoice.toUpperCase()===("ROCK")){
                playerSelection = UserChoice.toLowerCase();
                UserChoice = "0";
            }
            else if (UserChoice.toUpperCase()===("PAPER")){
                playerSelection = UserChoice.toLowerCase();
                UserChoice = "1";
            }
            else if (UserChoice.toUpperCase()===("SCISSORS")){
                playerSelection = UserChoice.toLowerCase();
                UserChoice = "2";
            }
        }
        else{
            while((0> parseInt(UserChoice)) || (2< parseInt(UserChoice))){
                UserChoice = prompt("Pick [0]Rock , [1]Paper, [2]Scissors: ");
            }
            if (UserChoice == 0 ){
                playerSelection = "Rock";
            }
            else if (UserChoice == 1 ){
                playerSelection = "Paper";
            }
            else if (UserChoice == 2 ){
                playerSelection = "Scissors";
            }
        }
        return UserChoice+playerSelection
    }
    
    function computerPlay(){
        var computerSelection = "";
        if (ComputerChoice == 0 ){
            computerSelection = "Rock";
        }
        else if (ComputerChoice == 1 ){
            computerSelection = "Paper";
        }
        else if (ComputerChoice == 2 ){
            computerSelection = "Scissors";
        }
        return computerSelection
    }
    
    let UserPicks = userPlay();
    UserChoice = parseInt(UserPicks[0]);
    playerSelection = UserPicks.slice(1);
    
    
    var ComputerChoice = Math.floor(Math.random() * 3);
    computerSelection = computerPlay();
    
    console.log("User Choice is: "+ playerSelection);
    console.log("Computer Choice is: "+ computerSelection.toLowerCase());
    
    var Uscore = 0;
    var pScore =0;
    if ( ComputerChoice === UserChoice){
        console.log("Draw");
    }
    else if ((ComputerChoice == 0) && (UserChoice == 1)){
        console.log("User Won this round");
        Uscore = Uscore +1;
    }
    else if ((ComputerChoice == 1) && (UserChoice == 2)){
        console.log("User Won this round");
        Uscore = Uscore +1;
    }
    else if ((ComputerChoice == 2) && (UserChoice == 0)){
        console.log("User Won this round");
        Uscore = Uscore +1;
    }
    else{
        console.log("Computer Won this round");
        pScore = pScore +1 ;
    }
    return [pScore, Uscore]
}
alert("First Round");
var UserPts = 0;
var Ppts = 0 ;
var score = game();
UserPts = score[1] + UserPts;
Ppts = score[0] + Ppts;
alert("Second Round");
score = game();
UserPts = score[1] + UserPts;
Ppts = score[0] + Ppts;
alert("Third Round");
score = game();
UserPts = score[1] + UserPts;
Ppts = score[0] + Ppts;
alert("Fourth Round");
score = game();
UserPts = score[1] + UserPts;
Ppts = score[0] + Ppts;
alert("Last Round");
score = game();
UserPts = score[1] + UserPts;
Ppts = score[0] + Ppts;
console.log("     ");
console.log("Final Results")
if(Ppts > UserPts){
    console.log("Computer is the winner");
}
else if ( Ppts == UserPts){
    console.log("Draw");
}
else{
    console.log("User is the winner ");
}
console.log(" ")
console.log("Computer score: ", + Ppts);
console.log("User score: "+ UserPts);