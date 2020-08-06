// Задание 2

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


document.write("<h2>В корзина:</h2>")

for (i=0; i < object.arr.length; i++) {
	document.write(object.arr[i].product + ' — ' + object.arr[i].price + " руб</br>")
}

document.write("</br><b>В корзине: " + "</b>" + object.arr.length + " товара")
document.write("</br><b>Стоимость заказа: "  + "</b>" + object.countBasketPrice())
