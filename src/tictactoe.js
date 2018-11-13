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
        if (!this.board[id[0]][id[1]]) {
            this.board[id[0]][id[1]] = this.turn
            squareElement.textContent = this.turn
            this.changeTurns()
            console.log(this.board)
        }
    }
    changeTurns() {
        if (this.turn === "x") {
            this.turn = "o"
        } else if (this.turn === "o") {
            this.turn = "x"
        }
    }
    checkWin() {
        const winPatterns = {
            //horizontales
            pattern1: [this.board[0][0], this.board[0][1], this.board[0][2]],
            pattern2: [this.board[1][0], this.board[1][1], this.board[1][2]],
            pattern3: [this.board[2][0], this.board[2][1], this.board[2][2]],
            //verticales
            pattern4: [this.board[0][0], this.board[1][0], this.board[2][0]],
            pattern5: [this.board[0][1], this.board[1][1], this.board[2][1]],
            pattern6: [this.board[0][2], this.board[1][2], this.board[2][2]],
            //diagonales
            pattern7: [this.board[0][0], this.board[1][1], this.board[2][2]],
            pattern8: [this.board[0][2], this.board[1][1], this.board[2][0]],

        }


    }
}
