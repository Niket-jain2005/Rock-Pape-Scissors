let userScore = 0;
let computerScore = 0;

const message = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara =document.querySelector("#user-score")
const computerScorePara =document.querySelector("#computer-score")

const genComputerChoice = ()=>
{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    message.innerText = "It's a draw. Play again.";
    message.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice, computerChoice)=>
{
    if(userWin)
    {
        userScore+=1;
        userScorePara.innerText = userScore;
        message.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    }
    else
    {
        computerScore+=1;
        computerScorePara.innerText = computerScore;
        message.innerText = `You lost. ${computerChoice} beats Your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
        return;
    }

    const userWin =
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper");

    showWinner(userWin, userChoice, computerChoice);
};


choices.forEach((choice)=>
{
    choice.addEventListener("click" , ()=>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});