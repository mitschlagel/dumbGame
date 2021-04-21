// User guesses how many tries it will take to find the number
// Random number 1-28 is generated on page load.
// Numbers randomly assigned to each box
// User clicks on boxes until they find their number
// If user guess number of tries required, they win.

/**
 * Generates random number between 1 and 28
 */
const randomInt = (min = 1, max = 28) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const guess = document.querySelector("#guess");
const button = document.querySelector("#guess__button");
const counterDiv = document.querySelector(".clicks__remaining");
let numGuesses = 0;

// Populate each cell with a number and style on hover and clicks
const cellArray = document.querySelectorAll(".cell");
// console.log(cellArray);

const assignedNums = [];

cellArray.forEach((cell) => {

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    let numClicks = 0;
    cell.addEventListener(
        "click",
        (e) => {
            cell.setAttribute("style", "background-color: " + randomColor + ";");
            console.log(e);

            // populate each cell with a random int 1-28, no repeats!
            if (numClicks === 0 && numGuesses != 0) {
                let num = 0;
                do {
                    num = randomInt();
                    assignedNums.push(num)
                } while (!assignedNums.includes(num));


                cell.innerHTML = num;
                console.log(assignedNums);
                let currentGuess = document.querySelector(".clicks__remaining");


                counterDiv.innerHTML = currentGuess.textContent - 1;  // update counter on page
                numGuesses--;

            }
        },
        false
    );


});

const targetGenerator = () => {
    target = document.querySelector(".num__target");
    target.innerHTML = randomInt();
}


button.addEventListener(
    "click",
    () => {
        console.log(guess.value);
        counterDiv.innerHTML = guess.value; // display guess on page
        numGuesses = guess.value; // to keep track of how many guess have been used.
    },
    false
);

const clicksRemaining = (

) => { };
targetGenerator();