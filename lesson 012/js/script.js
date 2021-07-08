'use strict';

let obj = {
	width: 1024,
	hight: 1024,
	name: 'text'
};

obj.bool = true;
console.log(obj);

obj.colors = {
	bg: 'red',
	border: 'brown'
}

delete obj.bool;//удалить свойство в объекте
console.log(obj);

//цикл для переборас свойств и методов объекта
for (let key in obj) {
	console.log(`Свойство ${key} имеет значение ${obj[key]}`);
};

//метод - выводит количество свойств-методов в объекте
console.log(Object.keys(obj).length);


//МАССИВы
let arr = [];
arr = ['a', 'b', 55, 100, 200];
console.log(arr);

arr.pop();//метод pop, удаляет последний элемент из массива
arr.push('кот');//метод push, добавляет новый элемент из массива в конец

arr.shift();//метод shift удаляет первый элемент массива
arr.unshift(5000);// метод unshift добавляет в начало массива новый элемент

console.log(arr);
console.log(arr.length);

//цикл для перебора массива
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
};


//цикл для массива forEach, использует сcallback функцию.
// значение, инедкс, сам массив
arr.forEach(
	function (item, i, mass){
	console.log(i+': '+item+' ( элемент массива ' + mass +')');
	}
);

//цикл ТОЛЬКО для МАССИВов for of. С объектами НЕ работает, выдаст ошибку.
let mass2 = ['bird', 'fish', 'cat', 'dog'];
for(let key of mass2) {
	console.log(key);
};


for(let key in mass2) {
	console.log(key+mass2[key]);
};

















