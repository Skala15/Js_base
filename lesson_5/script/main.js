//Задание 1

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





//Задание 2
let basket_price = 0

const object = {

	arr: [{product: "shorts", price: 2200}, {product: "cap", price: 1100}, {product: "shoes", price: 3300}, {product: "socks", price: 220}],
	
	countBasketPrice: function () {
		
		for(i = 0; i < this.arr.length; i++) {
			basket_price = parseInt(basket_price + this.arr[i].price)

		}

		console.log(basket_price)
		return 
	}
}

object.countBasketPrice()
