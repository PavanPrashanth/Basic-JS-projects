let user_score = 0;
let draw_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const draw = document.querySelector("#draw");
const compScore = document.querySelector("#comp-score");


const genCompChoice = () => {
    // this function is for generating computer choice,can be use for many games (universal fn)
    const options = ["rock","paper","scissors"];
    // for creating random number use below
    //Math.random() * x gives a random real number b/w 0 and x 
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
    
};


const drawGame = () => {
    msg.innerText = "Game drawn, Play again.";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        user_score++;
        userScore.innerText = user_score;
        
    }
    else{
        msg.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        comp_score++;
        compScore.innerText = comp_score;
    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
    // to check who won
    if(userChoice === compChoice){
        //for draw
        drawGame();
        draw_score++;
        draw.innerText = draw_score;
        
    }
    else{
        let userWin = true;
        
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});