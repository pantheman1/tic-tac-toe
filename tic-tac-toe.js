let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", ""];
let gameStatus = ""
function checkGameStatus() {
    //check rows
    for (let i = 0; i < 9; i += 3) {
        if (squareValues[i] !== ""
            && squareValues[i] === squareValues[i + 1]
            && squareValues[i] === squareValues[i + 2]) {
            gameStatus = squareValues[i]
            break
        }
    }
    //check columns
    for (let i = 0; i < 3; i++) {
        if (squareValues[i] !== ""
            && squareValues[i] === squareValues[i + 3]
            && squareValues[i] === squareValues[i + 6]) {
            gameStatus = squareValues[i]
            break;
        }
    }
    if (squareValues[0] !== ""
        && squareValues[0] === squareValues[4]
        && squareValues[0] === squareValues[8]) {
        gameStatus = squareValues[0]
    }
    if (squareValues[2] !== ""
        && squareValues[2] === squareValues[4]
        && squareValues[2] === squareValues[6]) {
        gameStatus = squareValues[2]
    }
    let boardIsFilled = true;
    for (let i = 0; i < 9; i++) {
        if (squareValues[i] === '') {
            boardIsFilled = false;
        }
    }

    if (boardIsFilled) {
        gameStatus = 'None';
    }
    if (gameStatus !== "") {
        document
            .getElementById("game-status")
            .innerHTML = gameStatus.toUpperCase()
    }
}

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


        checkGameStatus()


    })
