'use strict';

let num = 51;

угадываем число 50
if (num < 49) {
	console.log('Мало!');
} else if (num > 50) {
	console.log('Многовато');
} else if (num == 50) {
	console.log('Верно,  50!');
}


//использование тернарного оператора (учасвует 3 аргумента)
//на практие чаще используется if, т.к. он более понятный
(num == 50) ? console.log('Верно,  50!') : console.log('Неверно!');


//switch используется вместо if, когда много условий, так удобнее
//способ 1, наиболее распростроненный, идет строгое сравнение с аргументом num2
let num2 = 48;
switch (num2) {
	case 48: // if (num2 === 48)
		console.log('Мало!');
		break;
	case 51: // if (num2 === 48)
		console.log('Многовато');
		break;
	case 50: // if (num2 === 50)
		console.log('Верно,  50!');
		break;
	default:
	 	console.log('Что-то пошло не так!');
	 	break;	
}


//способ 2, более редкий. В аргументе идет true, и сравнивается в case с выражением, которое возращает true или falsе. В итоге идет проверка на true === true/false
let num1 = 48;
switch (true) {
	case num1 < 50:
		console.log('Мало!');
		break;
	case num1 > 50:
		console.log('Многовато');
		break;
	case num1 === 50:
		console.log('Верно,  50!');
		break;
	default:
	 	console.log('Что-то пошло не так!');
	 	break;	
}




























