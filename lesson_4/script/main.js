//Задание №1

let number = prompt("Введите число от 0 до 999: ")

let object = {}
object.unit = number % 10
object.ten = Math.floor((number % 100) / 10)
object.hundred = Math.floor((number % 1000) / 100)

console.log(object)




//Задание №2

let arr = [3300, 1100, 2200, 2500]

let obj = {}
obj.shorts = arr[0]
obj.cap = arr[1]
obj.shoes = arr[2]
obj.socks = arr[3]

console.log(obj)

function countBasketPrice(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	console.log("сумма: " + sum + " руб.")
}

countBasketPrice(arr)
