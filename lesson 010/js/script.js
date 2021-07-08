'use strict';

let num = 50;

showName();

function showName() {
	let num = 20;
	console.log(num);
}

console.log(num);

//==============================
//function declaration
console.log(calc(4, 2));

function calc(a, b) {
	return (a + b);
}

console.log(calc(12, 10));

//==============================
function numRet() {
	let num = 88;
	return num;
}

let newNum = numRet();
console.log(newNum);

//==============================
//function expressen

// console.log(calc2(3, 3));//ошибка, нельзя вызвать до обявления

let calc2 = function (a, b) {
	return (a * b);
};

console.log(calc2(3, 3));

//==============================
//стрелочная функция

// console.log(calc3(3, 3));//ошибка, нельзя вызвать до обявления

let calc3 = (a, b) => {return (a * b)};

console.log(calc3(3, 3));

// ===============================
//свойства и методы строк

let str = 'testAnn';
console.log(str.length);//свойство строки - длина

console.log(str.toLowerCase());//метод строки
console.log(str.toUpperCase());//метод строки

// ================================
//методы чисел

let ten = 10.468;
console.log(Math.round(ten));// метод чисел Math.round() - округляет до целого числа

console.log(Math.random());//возращает рандомное значение от 0 до 1

let rand = Math.round(Math.random() * 10);
console.log(rand);

let y = "5.55px";
console.log(parseInt(y));//метод, преобразует типы данных из строки с целое число

console.log(parseFloat(y));//метод, преобразует типы данных из строки с целое число c дробной частью






















