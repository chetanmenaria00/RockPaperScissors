const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const resetText = document.querySelector("#scoreText");

const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;
let temp = 0;
temp = Number(temp)

choiceBtn.forEach(button => button.addEventListener("click",()=>{
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    resetText.textContent = checkScore()
}));

function computerTurn(){
    const randNum = Math.floor(Math.random()*3+1);
    switch(randNum)
    {
        case 1:
            computer = "ROCK"
            break
        case 2:
            computer = "PAPER"
            break
        case 3:
            computer = "SCISSORS"
            break
    }
}

function checkWinner(){
    if(player===computer)
    {
        return "Draw"
    }
    else if(computer=="ROCK")
    {
        return (player == "PAPER") ? "You Win!":"You Lose!"
    }
    else if(computer=="PAPER")
    {
        return (player == "ROCK") ? "You Lose!":"You Win!"
    }
    else if(computer=="SCISSORS")
    {
        return (player == "PAPER") ? "You Lose!":"You Win!"
    }
}
//reset
document.getElementById("reset").onclick = function(){
    playerText.textContent = "Player: ";
    computerText.textContent = "Computer: ";
    resultText.textContent = "Result";
    resetText.textContent = "Your Score: 0";
}
//score

function checkScore(){
    
    if(resultText.textContent==="You Lose!")
    {
        temp--;
        return `Your Score: ${temp}`;
    }
    else if(resultText.textContent==="You Win!")
    {
        temp++;
        return `Your Score: ${temp}`;
    }
    else if(resultText.textContent==="Draw")
    {
        return `Your Score: ${temp}`;
    }
    else{
        return "score";
    }
}