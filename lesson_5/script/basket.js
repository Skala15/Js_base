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