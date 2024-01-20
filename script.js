const choices = ['rock', 'paper', 'scissors']

let playerScore = 0, computerScore = 0;


const buttons = document.querySelectorAll('button');



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        update(button.id);
        checkEnd();
    });   
});

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }
    if (playerChoice === 'rock' && computerChoice === 'paper'
        || playerChoice === 'paper' && computerChoice === 'scissors'
        || playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'computer';
    }
    return 'player';
}

function checkEnd() {
    if(playerScore >= 5 || computerScore >=5){
        buttons.forEach((button) => {
            button.disabled = true;  
        });
        if(playerScore >= 5){
            document.getElementById('player').style.backgroundColor = 'green';
            document.getElementById('computer').style.backgroundColor = 'red';

            
        } else {
            document.getElementById('player').style.backgroundColor = 'red';
            document.getElementById('computer').style.backgroundColor = 'green';

        }
    }
}

function update(playerChoice){
    const computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice)
    const winner = checkWinner(playerChoice, computerChoice);
    console.log(winner)
    let msg = '';
    if(winner === 'player'){
        msg = `You won this round`;
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
    } else if(winner === 'computer'){
        msg = `You lost this round`;
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
    } else {
        msg = `Tie`;
    }
    document.getElementById('latest').textContent = msg;

    

}