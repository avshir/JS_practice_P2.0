'use strict';

console.log(left);//underfind
// console.log(second); //ошибка
// console.log(pi); //ошибка

//ВИДЫ переменных
var left = 1;// можно вызвать выше по коду, но будет undefind
let second = 2;// нельзя вызывать выше по коду; не выходи за {} рамки
const pi = 3.14; //не меняется, хотя обходными путями поменять можноull

a3();//3, можно вызывать

function a3 (){
	let tree = 3;
	console.log(tree);
}

// ===================================
// ТИПЫ данных
let type1 = 5;//number
let type2 = 'строка';//string
let type3 = true;//boolean
let type4 = 0;//number
let type5 = false;//boolean

let n = null;//null
console.log(n);
console.log(typeof (n));
console.log(typeof(pi));

//number, преобразования в тип number
type4 = 10 / 0; //тип  number, infinity
console.log(typeof (+'5jkjk'));//тип  number
console.log(+'5jkjk');// тип  number, NaN
console.log(+'5');// тип  number,синий цвет, ПРЕОБРАЗОВАЛИ в число через унарный плюс
console.log('5');// тип  string, черный цвет
console.log(parseInt('5px'));// 5, тип  number,синий цвет, ПРЕОБРАЗОВАЛИ в целове число через метод parseInt
console.log(parseFloat('12.555%'));// тип  number,синий цвет, ПРЕОБРАЗОВАЛИ в целое или дробное число через метод parseFloat
console.log(Number('100')); //100, почти не используется
console.log(Number('100ss')); //NaN




//string, преобразования в строку
String(500); //метод почти не используется, вместо нее способ сложения с пустой строкой
console.log(String(500));

console.log(typeof (type1 + type2));
console.log(type1 + type2);
console.log(typeof ('' + 12));//тип string, ПРЕОБРАЗОВАЛИ в строку через сложение(канкатенацию) со строкой (можно пустой)
console.log('' + 12);
console.log('' + false);//строка false





//тип данных boolean, часто используется как условие в if
// false: 0; ''; null; undefined; NaN; conferm(отмена);
// true: 1; infinity; ' '; пустые массивы, пустые объекты; conferm(ок);
let isGood = true;
let isMarred = false;
let a = 1;
let b = {};

if (b) {
	console.log('правда');
} else {
	console.log('ложь');
}

console.log(typeof (!!'5'));//преобразует в булиновый тип, на пратике используется очень редко
console.log(typeof (Boolean('ggg')));//преобразует в булиновый тип, на пратике используется очень редко

// if (confirm('Сегодня вторник?')) {
// 	console.log('правда');
// } else {
// 	console.log('ложь');
// }


console.log(typeof (ppp));//undefined

//object - комплексный тип данных
//массив - частный случай объекта, у которого ключи - числа от 0

let obj = {};
let arr = [];
console.log(typeof (arr));
console.log(Array.isArray(arr));// способ проверки, является переменная массивом!!!, возращает true либо false

let person = {};
person = {
	name: 'Anna',
	age: 37,
	isBlonde: false
};
//2 способа вывести значение по ключу
console.log(person.age);//37, обратились к свойсту age
console.log(person['age']);//37

//            0           1          2
let arr2 = ['flower.png', 'cat.jpg', 'dog.jpg'];
console.log(arr2[1]);//cat.jpg

// сравнение значений
// == не строгое равно, без учета типа данных
// === строгое равно, с учетом типа данных
let f = 500,
	d = '500',
	m = 1,
	v = true,
	k = false;
//&& имеет более высокий приоритет (6), чем || (5)
		
console.log(f == d);// true
console.log(f === +d);// true
console.log(f === d);// false

console.log(m == v);// true
console.log(m === v);// false

console.log(0 == false);// true
console.log(0 === false);// false


//&& и ||
//перед сравнением преобразует в boolean тип, а потом сравнивает, и возращает первое подходящее под условие значение
console.log(v && k);// false
console.log(v && m);// 1 (возращает последнее значение, т.к. проверяется все значения)
console.log(v || m);// true (если первое значение true, то вернет его, т.к. его достаточно для выполенения условия или)

console.log(f && d);// 500 (тип строка)
console.log(f || d);// 500 (тип число)

console.log(5 || 2 || false);// 5
console.log(false || 2 || false);// 2
console.log(true || 2 || false);// true
console.log(null || '' || 0);// 0


console.log(5 && 2 && 10);// 10
console.log(5 && 2 && 0);// 0
console.log(5 && 2 && false);// false
console.log(5 && 2 && null);// null
console.log(5 && 2 && undefined);// undefined
console.log(false && 2 && false);// false
console.log(true && 2 && false);//false

console.log(2 && 3);//3
console.log(5 && 2 || 7);//2
console.log(5 && (2 || 7));//2
console.log(8 || 6 || 9);//8
console.log(8 || 6 && 9);//8
console.log((8 || 6) && 9);//9





















