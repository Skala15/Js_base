//Задание после второго урока
//Задание #1
/*
var a = 1
var b = 1
var c
var d

c = ++a
alert("Вывод с1: " + c) //2         с = a + 1 = 2

d = b++
alert("Вывод d1: " + d) //1         d = b,     b + 1 считает после 34 строки

c = (2 + ++a)
alert("Вывод с2: " + c) //5         c = 2 + ((a + 1) + 1) = 5 

d = (2 + b++)
alert("Вывод d2: " + d) //4         d = 2 + b + 1 = 4,      b + 1 считет после 41 строки

alert("Вывод a: " + a) //3          a - изначально 1, в 28 строке ++a, в 34 строке ++a.   Итого: a=3
alert("Вывод b: " + b) //3          b - изначально 1, в 31 строке b++, в 37 строке b++.   Итого: b=3  
*/







//Задание #2
/*
var a = 2
var x = 1 + (a *= 2)       // x = 1 + (a * 2) = 5          Ответ: 5
*/









//Задание #3
/* 
let a = prompt("Введите a:")
let b = prompt("Введите b:")
if (a >= 0 && b >= 0) {
	alert("Разность: " + (a - b))
} else if (a < 0 && b < 0) {
	alert("Умножение: " + (a * b))
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
	a = parseInt(a)
	b = parseInt(b)
	alert("Сумма: " + (a + b)) 
} 
*/










//Задание #4 

let a = Math.round(Math.random() * 15)
alert(a)
switch (a) {
	case 1:
		console.log("1")
	case 2:
		console.log("2")
	case 3:
		console.log("3")
	case 4:
		console.log("4")
	case 5:
		console.log("5")
	case 6:
		console.log("6")
	case 7:
		console.log("7")
	case 8:
		console.log("8")
	case 9:
		console.log("9")
	case 10:
		console.log("10")
	case 11:
		console.log("11")
	case 12:
		console.log("12")
	case 13:
		console.log("13")
	case 14:
		console.log("14")
	case 15:
		console.log("15")
		break
	default:
		alert("Другое число")
		break
} 







//Задание #5
/*
let a
let b
function summa(a, b) {
	return a + b
}
alert("Сумма: " + summa(10, 25))


function multiplication(a, b) {
	return a * b
}
alert("Умножение: " + multiplication(10, 6))


function division(a, b) {
	return a / b
}
alert("Деление: " + division(3, 6))


function subtraction(a, b) {
	return a - b
}
alert("Вычитание: " + subtraction(43, 20))
*/











//Задание #6
/*
function mathOperation() {
	let arg1 = parseInt(prompt("Введите arg1: "))
	let arg2 = parseInt(prompt("Введите arg2: "))
	let operation = prompt("Введите Operation( + - * / ): ")

	switch (operation) {
		case "+":
			alert("Сумма: " + (arg1 + arg2))
			break
		case "-":
			alert("Разность: " + (arg1 - arg2))
			break
		case "*":
			alert("Умножение: " + (arg1 * arg2))
			break
		case "/":
			alert("Деление: " + (arg1 / arg2))
			break
		default:
			alert("Неправильно введена операция!!!")
	}
}

mathOperation()
*/









//Задание #7 
/*
let a = 0
let b = null

alert(typeof(a))  //number
alert(typeof(b))  //object

alert(a == b)      //false так как null - это объект, а 0 - это число, то сравнить их нельзя и получается false (я так понял)
*/










//Задание #8
/*
let val = prompt("Введите число: ")
let pow = prompt("Введите степень: ")
function power(val, pow) {
	return val**pow
}

alert(power(val, pow))
*/
