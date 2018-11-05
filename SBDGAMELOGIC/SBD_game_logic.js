
levelsArray = [
    ["Level 1", "a", "o", "e", "u", "i"],
    ["Level 2", "d", "h", "t", "n", "s"],
    ["Level 3", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s"]
]
console.log(levelsArray)

levelsArrayCount = 0

var wordArray = []

var wordArrayCount = 1

var word = null

var time = 5

var isPlaying

var statusinterval
var timeInterval

// (1) set of words loads in array

loadWordArray = function () {
    wordArray = levelsArray[levelsArrayCount]
    console.log(wordArray)
}

// (2) first word gets set

loadWord = function () {
    time = 10
    console.log("seconds left: " + time)
    word = wordArray[wordArrayCount]
    console.log("the current word is: " + word)
}

// (1) and (2) are called

loadLevel = function () {
    loadWordArray()
    loadWord()
    timeInterval = setInterval(timeLeft, 1000)
    statusInterval = setInterval(checkStatus, 50)
}

function timeLeft() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    console.log(time)
    // timeDisplay.innerHTML = time;
}   

loadLevel()

//  (3)  the first word is displayed (also, an asteroid approaches)

//  (4)  player's keyboard input is taken (as dvorak)

//  (5)  player has 10 seconds to type out the word

//  (6)  if 10 seconds pass: game over! (game over screen)

//  (7)  if player successfully types out the word,
//       then next word is displayed (also, shoot down the asteroid)

//  (8)if all words from array are complete: level complete! (level complete screen)
levelComplete = function () {

    //  (9)load a new set of words in array

    levelsArrayCount++
    loadLevel()
}
// levelComplete()



function checkStatus() {
    if (!isPlaying && time === 0) {
        clearInterval(timeInterval)
        clearInterval(statusInterval)
        console.log("GAME OVER!")

        // message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}