console.log("Welcome! Game has been started!"); //To notify the user that game has started. 

function getComputerChoice() {
    items = ['Rock', 'Paper', 'Scissors'];
    return items[Math.floor(Math.random() * items.length)]
}

function capitalize(s) {
    if (typeof s != "string" || s.length === 0) {
        return s;
    }
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    if (playerSelection === computerSelection) {
        return `Tie! Both chose ${playerSelection}`;
    }
    if (playerSelection === 'Rock' && computerSelection === 'Paper'
        || playerSelection === 'Paper' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'
        || playerSelection === 'Paper' && computerSelection === 'Rock'
        || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    let score = 0;
    let win = 0, tie = 0, lose = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt(`Round${i + 1} Choice?`)
        const computerSelection = getComputerChoice();
        const msg = playRound(playerSelection, computerSelection);
        if (msg.includes('Win')){
            win++;
            score += 3;
        } else if (msg.includes('Tie')){
            tie++;
            score += 1;
        } else {
            lose++;
        }
        console.log(msg);
    }
    console.log(`You have ${win} wins, ${tie} ties, and ${lose} loses\nYour total score is ${score}`);
} 

game(); // This will automaticly start the game by calling the function.
