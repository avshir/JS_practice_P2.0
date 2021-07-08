'use strict';

let money, time;
money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let ans1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let ans2 = prompt('Во сколько обойдется?', '');
let ans3 = prompt('Введите обязательную статью расходов в этом месяце', '');
let ans4 = prompt('Во сколько обойдется?', '');
console.log(ans1);
console.log(ans2);

appData.expenses[ans1] = ans2;
appData.expenses[ans3] = ans4;
console.log(appData);

alert('бюджет на 1 день: ' + appData.budget / 30 + 'рублей');


//ЗАДАНИЕ 2
// let a = 10, b;
// console.log([] + 1 + 2);
// // alert([0]);
// console.log(typeof ([] + 1));
// console.log(a && b);//undefined
// console.log(!!(a && b));//false
// console.log(null || 2 && 3 || 4);//3

// let y = [1, 2, 3],
// 		m = [1, 2, 3];
// console.log(y == m);//false
// console.log(+"Infinity");//Infinity
// console.log("ёжик" > "яблоко");//true
// console.log(0 || "" || 2 || undefined || true || falsе);//2






















