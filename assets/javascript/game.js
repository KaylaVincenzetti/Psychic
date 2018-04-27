var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "W", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
//computer generates a letter
//user picks a letter
//computer compares the letter the user picked to generated letter
//if letters match user wins
//if letters don't match user loses
function startGame() {
    guessesLeft = 9;
        var computerChoice = letters[Math.floor(Math.random() * letters.length)];
        document.onkeyup = function(event) {
        console.log(computerChoice);
            
        var userGuess = event.key;
        console.log(userGuess);

        if (userGuess.length === 1 && userGuess.match(/[a-z]/i)) {
            
        guessesSoFar.push(userGuess);
        document.getElementById("guessesSoFar").innerHTML=guessesSoFar;
        

        
            //if computerChoice === userGuess user wins userScore ++ else computerScore ++

        if ((userGuess === computerChoice)) {
            wins++
            alert("You Win!")
            guessesLeft = 9;
            guessesSoFar.length = 0;
            console.log('wins=',wins, 'losses=',losses);
            document.getElementById("wins").innerHTML=wins;
            startGame();
        } if ((guessesLeft == 0)) {
            losses++
            alert("Game Over!")
            guessesLeft = 9;
            guessesSoFar.length = 0;
            console.log(losses);
        } else if ((userGuess != computerChoice)) {
            guessesLeft--;
            document.getElementById("guessesLeft").innerHTML=guessesLeft;  
            if (guessesLeft <= 0) {
                losses++;
                alert("Better Luck Next Time!")
                console.log('wins=',wins,', losses=',losses);
                document.getElementById("losses").innerHTML=losses;
                startGame();
            }
        }
    } else {
        alert("Invalid Key Press");
    }
} 
}
startGame();
