let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget()
{
    return Math.floor(Math.random() * 10 );
}

function compareGuesses(humanGuess, computerGuess, secretGuess)
{

    let human = Math.abs(humanGuess-secretGuess);
    let computer = Math.abs(computerGuess-secretGuess);

    if(human < computer)
    {
        return true;
    }
        else if(computer<human)
        
                return false;
                else 
                return true;
}

function updateScore(winner)
{
    if(winner === 'human')
    humanScore++;
    else if (winner === 'computer')
    computerScore++;

}

function advanceRound()
{
currentRoundNumber++;
}