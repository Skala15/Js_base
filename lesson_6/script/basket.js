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




let a = document.createElement("div")
a.className = "my_div"
a.innerHTML = "<h1>Kорзина: </h1>"
basket.appendChild(a)

for (i = 0; i < object.arr.length; i++) {
	let b = document.createElement("span")
	b.innerHTML = object.arr[i].product + ' — ' + object.arr[i].price + " руб</br>"
	basket.appendChild(b)
}

let c = document.createElement("span")
c.innerHTML = ("</br><b>В корзине: " + "</b>" + object.arr.length + " товара")
basket.appendChild(c)

let d = document.createElement("span")
d.innerHTML = "</br><b>Стоимость заказа: "  + "</b>" + object.countBasketPrice()
basket.appendChild(d)



