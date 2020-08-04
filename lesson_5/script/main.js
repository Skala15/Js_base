function myBoard(){
    let board = document.querySelector(".board")
    let block
    let cell = true
    
    for (let i = 0; i < 8; i++) {
        
        for (let j = 0; j < 8; j++) {
            
            if (j == 0) {
                cell =! cell  
            }
            
            block = document.createElement("div")
        
            if (cell) {
                block.className = "block black"
            } else {
                block.className = "block white"
            }
            
            board.appendChild(block)
            
            cell =! cell
        }
    }
}
 
myBoard()

Window.onload = my_initiation
