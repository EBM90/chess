const board = document.querySelector('.board')
const columns = ['A', 'B','C','D','E','F','G','H']
const rows = [8,7,6,5,4,3,2,1]

class Piece {
    constructor(positionC, positionR){
        this.positionC = positionC
        this.positionR = positionR
        this.position = positionC + positionR 
        this.square =  document.querySelector(`#${this.position}`)
    }
    
}

class Pawn extends Piece {
   
    addWhitePawn(){
        
        this.square.innerHTML = `<img id="pawn${this.position}" class="pieces" src="/pics/whitepawn.jpg"/>`
        
    }

    addBlackPawn(){
        this.square.innerHTML = `<img id="pawn${this.position}" class="pieces" src="/pics/blackpawn.jpg"/>`
    }

    // move(){
    //     const pawn = document.getElementById(`pawn${this.position}`)
    //     pawn.addEventListener('click', firstClick)
    // }
    
}

class Rook extends Piece{

    addBlackRook(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/blackrook.jpg"/>`
    }
    addWhiteRook(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/whiterook.jpg"/>`
    }

}
class Knight extends Piece {
    
    addBlackKnight(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/blackknight.jpg"/>`
    }
    addWhiteKnight(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/whiteknight.jpg"/>`
    }
}
class Bishop extends Piece{
    
    addBlackBishop(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/blackbishop.jpg"/>`
    }
    addWhiteBishop(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/whitebishop.png"/>`
    }
}

class Queen extends Piece {
    
    addBlackQueen(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/blackqueen.jpg"/>`
    }
    addWhiteQueen(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/whitequeen.png"/>`
    }
}

class King extends Piece {
    addBlackKing(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/blackking.jpg"/>`
    }
    addWhiteKing(){
        this.square.innerHTML = `<img draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)" class="bigPieces" src="/pics/whiteking.png"/>`
    }
}


function createBoard() {
for(let i = 0; i < 8; i++){
    const column = document.createElement('div')
    for(let j = 0; j< 8; j++){
        if(j%2===0 && i%2===0 || j%2!==0 && i%2!==0 ){
                column.setAttribute('class', `column${i+1}`)
                column.innerHTML += `<div id="${columns[i]}${rows[j]}" class="white dropzone"></div>`
        } else {
                column.setAttribute('class', `column${i+1}`)
                column.innerHTML += `<div id="${columns[i]}${rows[j]}" class="black dropzone"></div>`
        }
    }
    board.appendChild(column)
}    

const pawn1 = new Pawn('A',2)
const pawn2 = new Pawn('B',2)
const pawn3 = new Pawn('C',2)
const pawn4 = new Pawn('D',2)
const pawn5 = new Pawn('E',2)
const pawn6 = new Pawn('F',2)
const pawn7 = new Pawn('G',2)
const pawn8 = new Pawn('H',2)
const pawn9 = new Pawn('A',7)
const pawn10 = new Pawn('B',7)
const pawn11 = new Pawn('C',7)
const pawn12 = new Pawn('D',7)
const pawn13 = new Pawn('E',7)
const pawn14 = new Pawn('F',7)
const pawn15 = new Pawn('G',7)
const pawn16 = new Pawn('H',7)
const rook1 = new Rook('A',8)
const rook2 = new Rook('H',8)
const knight1 = new Knight('B', 8)
const knight2 = new Knight('G', 8)
const bishop1 = new Bishop('C', 8)
const bishop2 = new Bishop('F', 8)
const rook3 = new Rook('A',1)
const rook4 = new Rook('H',1)
const knight3 = new Knight('B', 1)
const knight4 = new Knight('G', 1)
const bishop3 = new Bishop('C', 1)
const bishop4 = new Bishop('F', 1)
const king1 = new King('E', 8)
const king2 = new King('E', 1)
const queen1 = new Queen('D', 8)
const queen2 = new Queen('D', 1)
pawn1.addWhitePawn()
pawn2.addWhitePawn()
pawn3.addWhitePawn()
pawn4.addWhitePawn()
pawn5.addWhitePawn()
pawn6.addWhitePawn()
pawn7.addWhitePawn()
pawn8.addWhitePawn()
pawn9.addBlackPawn()
pawn10.addBlackPawn()
pawn11.addBlackPawn()
pawn12.addBlackPawn()
pawn13.addBlackPawn()
pawn14.addBlackPawn()
pawn15.addBlackPawn()
pawn16.addBlackPawn()
rook1.addBlackRook()
rook2.addBlackRook()
knight1.addBlackKnight()
knight2.addBlackKnight()
bishop1.addBlackBishop()
bishop2.addBlackBishop()
rook3.addWhiteRook()
rook4.addWhiteRook()
knight3.addWhiteKnight()
knight4.addWhiteKnight()
bishop3.addWhiteBishop()
bishop4.addWhiteBishop()
king1.addBlackKing()
king2.addWhiteKing()
queen1.addBlackQueen()
queen2.addWhiteQueen()
// pawn1.move()
}

let text = ''

function addListeners() {
for(let i = 0; i < 8; i++){
    for(let j = 0; j< 8; j++){
        const square = document.querySelector(`#${columns[i]}${rows[j]}`)
        square.addEventListener('click', function(event){

            const target = event.currentTarget
            var img = target.innerHTML

            if(img !== ''){
                text = img
                target.innerHTML = ''
            }else {
                target.innerHTML = text
                text = ''
            }
            
        })
    }
}  
}

// function firstClick(){
   
//         const square1 = document.querySelector('#A3')
//         const square2 = document.querySelector('#A4')
//         square1.setAttribute('class', 'black active')
//         square2.setAttribute('class', 'white active')

// }

createBoard()
addListeners() 
