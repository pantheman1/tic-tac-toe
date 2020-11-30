let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", ""];

window.addEventListener("DOMContentLoaded", event => {

    document.querySelector("#tic-tac-toe-board").addEventListener("click", event => {
        const targetID = event.target.id

        if (!event.target.id.startsWith('square-')) return

        let squareIdx = Number.parseInt(targetID[targetID.length - 1])

        if (squareValues[squareIdx] !== '') return;

        let currSymbolImg = document.createElement("img")
        currSymbolImg.setAttribute("src", `./player-${currentPlayerSymbol}.svg`)
        event.target.appendChild(currSymbolImg)

        squareValues[squareIdx] = currentPlayerSymbol;

        if (currentPlayerSymbol === "x") {
            currentPlayerSymbol = "o"
        } else {
            currentPlayerSymbol = "x"
        }
    })





})
