import { TicTacToe } from "./tictactoe"

const boardSquares = document.querySelectorAll(".board-square")
const stateElement = document.querySelector("#state-text")
const game = new TicTacToe("x")

stateElement.textContent = `${game.turn.toUpperCase()} turn`

boardSquares.forEach(square => {
    square.addEventListener("click", e => {
        e.preventDefault()
        game.handleClick(e.target,stateElement)
    })
})

