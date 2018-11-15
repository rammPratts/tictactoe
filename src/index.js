import { TicTacToe } from "./tictactoe"

const boardSquares = document.querySelectorAll(".board-square")
const stateElement = document.querySelector("#state-text")
const restartButton = document.querySelector("#restart-game")

const startGame = () => {
    const game = new TicTacToe("x")

    stateElement.textContent = `${game.turn.toUpperCase()} turn`
    
    boardSquares.forEach(square => {
        square.textContent = ""
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

