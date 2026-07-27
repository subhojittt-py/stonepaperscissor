function toggleTheme() {

    const body = document.body;
    const themeBtn = document.getElementById("theme-btn");

    if(body.classList.contains("day-mode")){

        body.classList.remove("day-mode");
        body.classList.add("night-mode");
        themeBtn.innerText="☀️ Switch to Day Mode";

    }else{

        body.classList.remove("night-mode");
        body.classList.add("day-mode");
        themeBtn.innerText="🌙 Switch to Dark Mode";

    }

}
let playerScore = 0;
let computerScore = 0;

const emojis = {
    Stone: "🪨",
    Paper: "📄",
    Scissors: "✂️"
};

function computerChoice() {
    const choices = ["Stone","Paper","Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playGame(playerChoice){

    const computer = computerChoice();

    document.getElementById("player-move").innerHTML = emojis[playerChoice];
    document.getElementById("computer-move").innerHTML = emojis[computer];

    let result;

    if(playerChoice===computer){

        result="🤝 It's a Draw!";

    }

    else if(

        playerChoice==="Stone" && computer==="Scissors" ||
        playerChoice==="Paper" && computer==="Stone" ||
        playerChoice==="Scissors" && computer==="Paper"

    ){

        playerScore++;
        result="🎉 You Win!";

    }

    else{

        computerScore++;
        result="💻 Computer Wins!";

    }

    document.getElementById("round-result").innerHTML=result;

    document.getElementById("player-score-btn").innerHTML=playerScore;

    document.getElementById("computer-score-btn").innerHTML=computerScore;

}

function resetGame(){

    playerScore=0;
    computerScore=0;

    document.getElementById("player-score-btn").innerHTML=0;
    document.getElementById("computer-score-btn").innerHTML=0;

    document.getElementById("player-move").innerHTML="❓";
    document.getElementById("computer-move").innerHTML="❓";

    document.getElementById("round-result").innerHTML="Choose your move to start!";

}
