import { randomInt, randomColor } from "./helpers.js";

// If user guess number of tries required, they win.



// Random number 1-28 is generated as the title on page load.
const numTarget = document.querySelector(".num__target");
numTarget.innerHTML = randomInt();

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
const cellArray = document.querySelectorAll(".cell span");
const assignedNums = [];

cellArray.forEach((cell) => {
    let num = randomInt()
    assignedNums.push(num);
    cell.innerHTML = num;
    cell.style.display = "none"; // hide nums from user
    cell.addEventListener("click",
        () => {

            // cell.style.display = "block";  // why does this work block => none but not other way around?
            cell.style.backgroundColor = randomColor();

            console.log(bg);
        },
        false
    );
});

// User clicks on boxes until they find their number