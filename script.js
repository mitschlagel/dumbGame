import { randomInt, randomColor, numArray } from "./helpers.js";

// If user guess number of tries required, they win.



// Random number 1-28 is generated as the title on page load.
const numTarget = document.querySelector(".num__target");
numTarget.innerText = randomInt();

// User guesses how many tries it will take to find the number
// Guess is displayed on page
const guess = document.querySelector("#guess");
const button = document.querySelector("#guess__button");
const displayGuess = document.querySelector("#you__guessed");
const clicksRemaining = document.querySelector("#clicks__remaining");
button.addEventListener(
    "click",
    () => {
        console.log(guess.value);
        displayGuess.innerText = guess.value;
        clicksRemaining.innerText = guess.value;
    },
    false
);

// Numbers randomly assigned to each box
const cellArray = document.querySelectorAll(".cell");
const nums = numArray(); // Create int array 1-28 in random order

cellArray.forEach((cell) => {
    cell.addEventListener("click",
        (e) => {
            cell.style.backgroundColor = randomColor();
            cell.innerHTML = nums.pop();  // Populate each cell from int array
            clicksRemaining.innerText--;
            if (clicksRemaining.innerText == 0) {
                console.log("YOU LOSE");
            } else if (cell.innerText === numTarget.innerText) {
                console.log("YOU WIN");
            }
            console.log(nums.length);
        },
        false
    );

});

//TO DO: stop the event listener when num array is empty
