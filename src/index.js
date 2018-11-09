import { TicTacToe } from "./tictactoe"

const boardSquares = document.querySelectorAll(".board-square")
const game = new TicTacToe("x")

boardSquares.forEach(square => {
    square.addEventListener("click", e => {
        e.preventDefault()
        game.handleClick(e.target)
    })
})

