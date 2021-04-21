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



// Populate each cell with a number and style on hover and clicks
const cellArray = document.querySelectorAll(".cell");
// console.log(cellArray);

cellArray.forEach((cell) => {

    cell.addEventListener(
        "mouseenter",
        () => {
            cell.classList.add("highlight");
        },
        false
    );

    cell.addEventListener(
        "mouseleave",
        () => {
            cell.classList.remove("highlight");
        },
        false
    );

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    cell.addEventListener(
        "click",
        (e) => {
            cell.setAttribute("style", "background-color: " + randomColor + ";");
            console.log(e);
        },
        false
    );

    cell.addEventListener(
        "click",
        (e) => {
            cell.innerText = randomInt();
            console.log(e);
        },
        false
    );
});

const targetGenerator = () => {
    target = document.querySelector(".num__target");

    target.innerHTML = randomInt();
}

targetGenerator();