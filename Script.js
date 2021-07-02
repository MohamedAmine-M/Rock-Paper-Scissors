var RoundsNumber= parseInt(prompt("How Many Rounds Do you Want to play?"));
if((RoundsNumber%2)===0){
    RoundsNumber=RoundsNumber+1;
    alert("Rounds Must be an odd Number, the number of rounds was automatically set to "+RoundsNumber );
};


function startOver(RoundsNumber){
    var rePlay = document.getElementById("again");
    rePlay.style.visibility="hidden";
    var UserScoreElement = document.getElementById("UserScore").innerText;
    var ComputerScoreElement = document.getElementById("ComputerScore").innerText;    
    if((parseInt(UserScoreElement)+parseInt(ComputerScoreElement))== RoundsNumber){ 
        if(parseInt(UserScoreElement) > parseInt(ComputerScoreElement)){
            alert("User Is The Winner");
            location.reload();
        }else{
            alert("Computer Is The Winner");
            location.reload();
        }
    }
    var playerTurn = document.getElementById('turn');
    playerTurn.innerText = "Player Turn";
    var rock = document.getElementById('Rock'); //2
    var paper = document.getElementById('paper'); //0
    var scissors = document.getElementById('Scissors'); //1
    var winner = document.getElementById('winner');
    winner.innerText = "";
    
    rock.style.visibility ="inherit";
    paper.style.visibility ="inherit";
    scissors.style.visibility ="inherit";
}
//----------------------------------------------------------------------------------------------------------------//
function start(user){

    var computerChoice = computerSelection();
    var userChoice = user;
    var rock = document.getElementById('Rock'); //2
    var paper = document.getElementById('paper'); //0
    var scissors = document.getElementById('Scissors'); //1
    game(userChoice, computerChoice, rock, paper, scissors);

}
//----------------------------------------------------------------------------------------------------------------//
function computerSelection(){    
    var computerChoice = Math.floor(Math.random() * 3);
    return computerChoice
};
//----------------------------------------------------------------------------------------------------------------//
function playRound(userChoice, computerChoice, userScore, computerScore){ 
    var rock = document.getElementById('Rock'); //2
    var paper = document.getElementById('paper'); //0
    var scissors = document.getElementById('Scissors'); //1
    var winner = document.getElementById('winner');
    console.log(computerChoice);
    if((userChoice == 2 )&&(computerChoice ==1)){
        //user wins
        
        setTimeout(function(){paper.style.visibility ="hidden";winner.innerText = "User Won This Round";} ,2000);
        userScore = userScore +1 ;
        
   
    } else if((userChoice == 1)&&(computerChoice == 0)){
        //usr wins
        setTimeout(function(){rock.style.visibility ="hidden";winner.innerText = "User Won This Round";} ,2000);
        userScore = userScore +1 ;
        
    } else if((userChoice == 0)&& (computerChoice==2)){
        //usr wins
        setTimeout(function(){scissors.style.visibility ="hidden";winner.innerText = "User Won This Round";},2000)
        userScore = userScore +1 ;
    } else if (userChoice == computerChoice){
        //draw
        setTimeout(function(){winner.innerText = "Draw";},2000);
    }else if((userChoice == 1 )&&(computerChoice ==2)){
        //cmp wins
        setTimeout(function(){paper.style.visibility ="hidden";winner.innerText = "Computer Won This Round";},2000)
        computerScore = computerScore +1 ;
    } else if((userChoice == 0)&&(computerChoice == 1)){
        //cmp wins
        setTimeout(function(){rock.style.visibility ="hidden";winner.innerText = "Computer Won This Round";},2000)
        computerScore = computerScore +1 ;
    } else if((userChoice == 2)&& (computerChoice==0)){
        //cmp wins 
        setTimeout(function(){scissors.style.visibility ="hidden";winner.innerText = "Computer Won This Round";},2000)
        computerScore = computerScore +1 ;
    }
    scores =[userScore, computerScore];
    return scores
};
//----------------------------------------------------------------------------------------------------------------//
function game(userChoice, computerChoice){
    var playerTurn = document.getElementById('turn');
    var UserScoreElement = document.getElementById("UserScore");
    var ComputerScoreElement = document.getElementById("ComputerScore");
    var rePlay = document.getElementById("again");
    var userScore = parseInt(UserScoreElement.innerText);
    var computerScore = parseInt(ComputerScoreElement.innerText);
    playerTurn.innerText = "Computer Turn";
    var scores = playRound(userChoice, computerChoice,userScore, computerScore);
    setTimeout(function(){UserScoreElement.innerText = userScore;ComputerScoreElement.innerText = computerScore;playerTurn.innerText = "";rePlay.style.visibility = "inherit";} ,2000);
    userScore = parseInt(scores[0]);
    computerScore = parseInt(scores[1]);
    
};
//----------------------------------------------------------------------------------------------------------------//


















    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
   