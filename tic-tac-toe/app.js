let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-Game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let whoseTurnO = true; //to check whose turn

const winPatterns = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8] ,
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(whoseTurnO) {
        box.innerText = "O";
        box.classList.add("turnO");
        whoseTurnO = false; 
        }
        else{
            box.innerText = "X";
            box.classList.add("turnX");
            whoseTurnO = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const resetGame = () => {
    whoseTurnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("turnX");
        box.classList.remove("turnO");
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
   
};

const checkWinner = () => {
    for(let patterns of winPatterns){

        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if(pos1Val === pos2Val && pos1Val === pos3Val){
            console.log(`winner is ${pos1Val}`);
            disableBoxes();
            showWinner(pos1Val);
        }

        }
    }

};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);