//Задание №1 

let n = 0
while (n <= 100) {
	let k = 2
	while (k < n) {
		if (n % k === 0) {
			break
		}
		k++
	}

	if (n === k) {
		console.log(n)
	}
	n++

}







//Задание №2-3

let arr = [3300, 1100, 2200, 2500]

function countBasketPrice(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	console.log(sum)
}

countBasketPrice(arr)







//Задание №4 

for (let n = 0; n < 10; console.log(n++)) {
}







//Задание №4* 

	let a ="*"
	let b = a

	while (b.length <= 20) {
		console.log(b)
		b = b + a
	}

