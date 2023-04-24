// Open Rules Modal
document.querySelector(".rulesBtn").addEventListener("click",function openModal(){
   openCloseModal("flex",".rulesModal");
});

// Variable stores Two Close Buttons
var closeBtn = document.querySelectorAll(".closeBtn");
 
// Close rules Modal
closeBtn[0].addEventListener("click",function closeModal(){
   openCloseModal("none",".rulesModal");
    
});
// Close Win Modal
closeBtn[1].addEventListener("click",function closeModal(){
    openCloseModal("none",".winModal");
    currentScore = 0;
    document.querySelector(".playerOne .score").textContent = 0;
    document.querySelector(".playerTwo .score").textContent = 0;
    changeCurrentScore();
  
   
});

// Function defining Open or Close Blur and Rules or Win Modal
function openCloseModal(styleProperty,className){
    document.querySelector(".blur").style.display = styleProperty;
    document.querySelector(className).style.display = styleProperty;
}

// to check the player is active or not

function activeOrNot(player){
    if(document.querySelector(player).classList.contains("playerActive")){
        return true
    }
    else{
        return false
    }
}

// function for add the add active class

function addActive(playerOne, playerTwo){
    document.querySelector(playerOne).classList.add("playerActive");
    document.querySelector(playerTwo).classList.remove("playerActive");
}

// working of Roll Dice button

let currentScore = 0;
let player = "Player 1";
document.querySelector(".rollDiceBtn").addEventListener("click",function (){
        let randomScore = Math.floor(Math.random()*6+1);
        let playerOneScore = document.querySelector(".playerOne .currentScore").textContent,
        playerTwoScore = document.querySelector(".playerTwo .currentScore").textContent;
        playerOneScore = Number(playerOneScore);
        playerTwoScore = Number(playerTwoScore);
        if ((playerOneScore < 100) && (playerTwoScore < 100)){
            if(randomScore == 1){
                currentScore = 0;
                if(activeOrNot(".playerOne")){
                    addActive(".playerTwo",".playerOne");
                    player = "Player 2";
                    document.querySelector(".playerOne .status").classList.remove("active");
                    document.querySelector(".playerTwo .status").classList.add("active");
                    document.querySelector(".playerTwo .status").textContent = "active";
                    document.querySelector(".playerOne .status").textContent = "";
                }
                else{
                    addActive(".playerOne",".playerTwo");
                    player = "Player 1";
                    document.querySelector(".playerTwo .status").classList.remove("active");
                    document.querySelector(".playerOne .status").classList.add("active");
                    document.querySelector(".playerOne .status").textContent = "active";
                    document.querySelector(".playerTwo .status").textContent = "";
                    

                }
            }
            else{
                currentScore += randomScore;
            }

            changeCurrentScore();
            changeDicePicture(randomScore)
            
        }
});

// change the current score of the player

function changeCurrentScore(){
    if(player == "Player 1"){
        document.querySelector(".playerOne .currentScore").textContent = currentScore;
        document.querySelector(".playerTwo .currentScore").textContent = 0;
    }
    else{
        document.querySelector(".playerTwo .currentScore").textContent = currentScore;
        document.querySelector(".playerOne .currentScore").textContent = 0;
    }
}

// Change the picture of the dice for every move

function changeDicePicture(randomScore){
    let diceImages = [
        'dice1.png',
        'dice2.png',
        'dice3.png',
        'dice4.png',
        'dice5.png',
        'dice6.png',
    ]
    document.querySelector(".diceImage").src = diceImages[randomScore-1];
}

// Working of Hold Button
document.querySelector(".holdBtn").addEventListener("click",function(){
        let mainScoreOne = document.querySelector(".playerOne .score").textContent,
        mainScoreTwo = document.querySelector(".playerTwo .score").textContent;
        mainScoreOne = Number(mainScoreOne);
        mainScoreTwo = Number(mainScoreTwo);
        if(player == "Player 1"){
            document.querySelector(".playerOne .score").textContent = currentScore + mainScoreOne;
        }
        else{
            document.querySelector(".playerTwo .score").textContent = currentScore + mainScoreTwo;
        }


        currentScore = 0;
        mainScoreOne = document.querySelector(".playerOne .score").textContent,
        mainScoreTwo = document.querySelector(".playerTwo .score").textContent;
        mainScoreOne = Number(mainScoreOne);
        mainScoreTwo = Number(mainScoreTwo);
        changeCurrentScore();
        
        if((mainScoreOne < 100) && (mainScoreTwo < 100)){
            if(activeOrNot(".playerOne")){
                addActive(".playerTwo",".playerOne");
                player = "Player 2";
                document.querySelector(".playerOne .status").classList.remove("active");
                document.querySelector(".playerTwo .status").classList.add("active");
                document.querySelector(".playerTwo .status").textContent = "active";
                document.querySelector(".playerOne .status").textContent = "";
            }
            else{
                addActive(".playerOne",".playerTwo");
                player = "Player 1";
                document.querySelector(".playerTwo .status").classList.remove("active");
                document.querySelector(".playerOne .status").classList.add("active");
                document.querySelector(".playerOne .status").textContent = "active";
                document.querySelector(".playerTwo .status").textContent = "";
            }
        }
        else{
            if(player == "Player 1"){
                document.querySelector(".playerOne .score").textContent = "WINS";
                document.querySelector(".winner").textContent = "Player 1"
            }
            else{
                document.querySelector(".playerTwo .score").textContent = "WINS";
                document.querySelector(".winner").textContent = "Player 2"
            }
            openCloseModal("flex",".winModal");
        }
  
});

document.querySelector(".newGameBtn").addEventListener("click",function (){
    currentScore = 0;
    document.querySelector(".playerOne .score").textContent = 0;
    document.querySelector(".playerTwo .score").textContent = 0;
    changeCurrentScore();
    addActive(".playerOne",".playerTwo");
    pl = "Player 1";
    document.querySelector(".playerTwo .status").classList.remove("active");
    document.querySelector(".playerOne .status").classList.add("active");
    document.querySelector(".playerOne .status").textContent = "active";
    document.querySelector(".playerTwo .status").textContent = "";
});