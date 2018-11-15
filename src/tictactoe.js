export class TicTacToe {
    constructor(turn) {
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
        this.turn = turn
        this.state = "playing"
        this.trunsLeft = 9
    }
    handleClick(squareElement,textElement) {
        const id = squareElement.id.split(" ")

        if (!this.board[id[0]][id[1]] && this.state === "playing") {
            this.board[id[0]][id[1]] = this.turn
            squareElement.textContent = this.turn
            this.changeTurns()

            const state = this.checkWin()
            this.state = state
            this.changeState(textElement)
            console.log(this.trunsLeft)
            console.log(this.state)
        }
    }
    changeTurns() {
        if (this.turn === "x") {
            this.turn = "o"
            this.trunsLeft--
        } else if (this.turn === "o") {
            this.turn = "x"
            this.trunsLeft--
        }
    }
    checkWin() {
        let xWin = false
        let oWin = false
        const winPatterns = [
            //horizontales
            [this.board[0][0], this.board[0][1], this.board[0][2]],
            [this.board[1][0], this.board[1][1], this.board[1][2]],
            [this.board[2][0], this.board[2][1], this.board[2][2]],
            //verticales
            [this.board[0][0], this.board[1][0], this.board[2][0]],
            [this.board[0][1], this.board[1][1], this.board[2][1]],
            [this.board[0][2], this.board[1][2], this.board[2][2]],
            //diagonales
            [this.board[0][0], this.board[1][1], this.board[2][2]],
            [this.board[0][2], this.board[1][1], this.board[2][0]],

        ]

    //Check patterns

        for(let index in winPatterns){
            xWin = winPatterns[index].every(element => element === "x")
            oWin = winPatterns[index].every(element => element === "o")
            
                   
            if(xWin){
                return this.state = "x-win"
            }else if(oWin){
                return this.state = "o-win"
            }
        }

        if(!xWin && !oWin && this.trunsLeft <= 0){
            return this.state = "tie"
        }else if(!xWin && !oWin){
            return this.state = "playing"
        }
    

}
    changeState(textElement){
        if(this.state === "playing"){
            if(this.turn === "x"){
                textElement.textContent = "X turn"
            }else if(this.turn === "o"){
                textElement.textContent = "O turn"
            }
        }else{
            if(this.state === "x-win"){
                textElement.textContent = "X wins!!"
            }else if(this.state === "o-win"){
                textElement.textContent = "O wins!!"
            }else if(this.state === "tie"){
                textElement.textContent = "Tie! Nobody wins"
            }
        }
}
}
