const gameBoard = (() => {
    const boardArray = [];
    return {boardArray};
})();

const Player = (name) => {
    return {name};
}

const game = (() => {
    const player1 = Player("player1");
    const player2 = Player("player2");
    
    let turnCounter = 0;

    return {player1, player2, turnCounter};
})();

const boardSquares = Array.from(document.querySelectorAll(".boardSquare"));
boardSquares.forEach(square => square.addEventListener("click", displayController));

function displayController(e) {
    const displayWon = document.querySelector("#won");
    console.log(game.player1Won);
    console.log(gameBoard.boardArray);

    // player1 or player2's turn
    if (game.turnCounter % 2 === 0) {
        // check if square already has a value
        if (boardSquares[e.target.id].textContent === "") {
            gameBoard.boardArray[e.target.id] = "X";
            boardSquares[e.target.id].textContent = gameBoard.boardArray[e.target.id];
            // check if won
            if (gameBoard.boardArray[0] === "X" && gameBoard.boardArray[1] === "X" && gameBoard.boardArray[2] === "X") {
                displayWon.textContent = `${game.player1.name} won!`;
            }
            // if didn't win, then next players turn
            else {
                game.turnCounter++;
            }
        }  
    }
    else {
        if (boardSquares[e.target.id].textContent === "") {
            gameBoard.boardArray[e.target.id] = "0";
            boardSquares[e.target.id].textContent = gameBoard.boardArray[e.target.id];
            game.turnCounter++;
        }
    }
}
