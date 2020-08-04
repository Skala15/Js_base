//Задание №1

function counter(n) {
	const obj = {}

	if (n >= 0 && n <= 999) {
		const number = []

		for (let i = 1; i <= 3; i++) {
			number.push(n % 10)
			n = Math.trunc(n / 10)
		}

		[obj.unit, obj.ten, obj.hundred] = number
	}

	return obj
}

const result = counter(prompt("Введите число"))
console.log(result)




//Задание №2


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
