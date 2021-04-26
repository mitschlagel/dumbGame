const showWin = document.createElement("article");
const main = document.querySelector(".game__over");

export const winner = () => {
    const winBox = document.querySelector(".game__over");
    winBox.classList.add("winner");
    winBox.style.display = "block";
    winBox.innerHTML = `
        YOU WIN <br>
        <button class="overButton">Play Again?</button>
    `;
}

export const loser = () => {
    const lossBox = document.querySelector(".game__over");
    lossBox.classList.add("loser");
    lossBox.style.display = "block";
    lossBox.innerHTML = `
        YOU LOSE </br>
        <button class="overButton">Play Again?</button>
    `
}




