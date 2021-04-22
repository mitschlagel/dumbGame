import { randomInt, randomColor, numArray } from "./helpers.js";
// import loserContent from "./GameOver.js";


const numTarget = document.querySelector(".num__target");
numTarget.innerText = randomInt();


const guess = document.querySelector("#guess");
const button = document.querySelector("#guess__button");
const displayGuess = document.querySelector("#you__guessed");
const clicksRemaining = document.querySelector("#clicks__remaining");
button.addEventListener(
    "click",
    () => {

        // Start game, populate divs with user guess
        console.log(guess.value);
        displayGuess.innerText = guess.value;
        clicksRemaining.innerText = guess.value;



        const cellArray = document.querySelectorAll(".cell");
        const nums = numArray(); // Create int array 1-28 in random order
        const isSetArray = [];  // Array to store cell state

        // Populate cell with random num and color when clicked
        cellArray.forEach((cell) => {


            cell.addEventListener("click",
                (e) => {
                    console.log(displayGuess.value);

                    // Check if num has alreay been assigned
                    if (!isSetArray[e.target.className.substr(-2)]) {

                        cell.style.backgroundColor = randomColor();
                        let num = nums.pop();
                        cell.innerHTML = num;  // Populate each cell from int array
                        isSetArray[e.target.className.substr(-2)] = num;
                        clicksRemaining.innerText--;

                        if (clicksRemaining.innerText == 0) {

                            const loser = document.querySelector(".loser");
                            loser.style.display = "block";

                            console.log("YOU LOSE");
                        } else if (cell.innerText === numTarget.innerText) {
                            console.log("YOU WIN");
                        }
                    }

                    console.log(nums.length);

                },
                false

            );

        });
    },
    false
);

// Numbers randomly assigned to each box

