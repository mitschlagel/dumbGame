import { randomInt, randomColor, numArray } from "./helpers.js";
import { winner, loser } from "./GameOver.js";


const numTarget = document.querySelector(".num__target");
numTarget.innerText = randomInt();


const guess = document.querySelector("#guess");
const button = document.querySelector("#guess__button");
const displayGuess = document.querySelector("#you__guessed");
const clicksRemaining = document.querySelector("#clicks__remaining");
const totalScore = document.querySelector("#total__score")
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


                    // Check if num has alreay been assigned
                    if (!isSetArray[e.target.className.substr(-2)]) {

                        cell.style.backgroundColor = randomColor();
                        let num = nums.pop();
                        cell.innerHTML = num;  // Populate each cell from int array
                        isSetArray[e.target.className.substr(-2)] = num;
                        clicksRemaining.innerText--;

                        if (clicksRemaining.innerText == 0) {

                            loser();

                        } else if (cell.innerText === numTarget.innerText) {
                            winner();
                            totalScore.innerText += 100;



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

