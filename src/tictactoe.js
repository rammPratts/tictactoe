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

    //Check patterns
    // This code can be optimized a lot. Just wanted to make a solution for now. Will be omptimized :)
       xWin = winPatterns.pattern1.every(element => element === "x")
       oWin = winPatterns.pattern1.every(element => element === "o")
       
       if(xWin){
           return this.state = "x-win"
       }else if(oWin){
           return this.state = "o-win"
       }

       xWin = winPatterns.pattern2.every(element => element === "x")
       oWin = winPatterns.pattern2.every(element => element === "o")

       if(xWin){
        return this.state = "x-win"
    }else if(oWin){
        return this.state = "o-win"
    }

       xWin = winPatterns.pattern3.every(element => element === "x")
       oWin = winPatterns.pattern3.every(element => element === "o")

       if(xWin){
        return this.state = "x-win"
    }else if(oWin){
        return this.state = "o-win"
    }

       xWin = winPatterns.pattern4.every(element => element === "x")
       oWin = winPatterns.pattern4.every(element => element === "o")

       if(xWin){
           return this.state = "x-win"
       }else if(oWin){
           return this.state = "o-win"
       }

       xWin = winPatterns.pattern5.every(element => element === "x")
       oWin = winPatterns.pattern5.every(element => element === "o")

       if(xWin){
           return this.state = "x-win"
       }else if(oWin){
           return this.state = "o-win"
       }
    

       xWin = winPatterns.pattern6.every(element => element === "x")
       oWin = winPatterns.pattern6.every(element => element === "o")

       if(xWin){
        return this.state = "x-win"
    }else if(oWin){
        return this.state = "o-win"
    }
    

       xWin = winPatterns.pattern7.every(element => element === "x")
       oWin = winPatterns.pattern7.every(element => element === "o")

       if(xWin){
        return this.state = "x-win"
    }else if(oWin){
        return this.state = "o-win"
    }
    

       xWin = winPatterns.pattern8.every(element => element === "x")
       oWin = winPatterns.pattern8.every(element => element === "o")

       if(xWin){
           return this.state = "x-win"
       }else if(oWin){
           return this.state = "o-win"
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
