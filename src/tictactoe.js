export class TicTacToe {
    constructor(turn) {
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
        this.turn = turn
    }
    handleClick(squareElement) {
        const id = squareElement.id.split(" ")
        this.board[id[0]][id[1]] = this.turn
        squareElement.textContent = this.turn
        this.changeTurns()
    }
    changeTurns() {
        if (this.turn === "x") {
            this.turn = "o"
        } else if (this.turn === "o") {
            this.turn = "x"
        }
    }
}
