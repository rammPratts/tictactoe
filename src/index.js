import { TicTacToe } from "./tictactoe"

const boardSquares = document.querySelectorAll(".board-square")
const stateElement = document.querySelector("#state-text")
const restartButton = document.querySelector("#restart-game")

const startGame = () => {
    const randomNumber = Math.floor(Math.random() * (3-1) + 1) 
    const startingTurn = randomNumber === 1 ? "x" : "o"
    const game = new TicTacToe(startingTurn)

    stateElement.textContent = `${game.turn.toUpperCase()} turn`
    
    boardSquares.forEach(square => {
        square.classList.remove("squareX", "squareO")
        square.addEventListener("click", e => {
            e.preventDefault()
            game.handleClick(e.target,stateElement)
        })
    })
}
startGame()

restartButton.addEventListener("click", e => {
    e.preventDefault()
    startGame()
})

