'use strict';

let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');		
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++){
		let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
				b = prompt('Во сколько обойдется?', '');
		
		if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 20) {
			console.log('done');
			appData.expenses[a] = b;
		} else {
			console.log ("bad result");
			i--;
		}
	
		// console.log(a);
		// console.log(b);
	}
}
chooseExpenses();

//тренировка
// let i = 0;
// while (i < 2){
// 	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
// 			b = prompt('Во сколько обойдется?', '');
	
// 	if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 20) {
// 		console.log('done');
// 		appData.expenses[a] = b;
// 	} else {
// 		console.log ("bad result");
// 		i--;
// 	}
// 	i++;
// }

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();//округлим до целых,  метод toFixed() возвращает строку

	alert('Ежедневный бюджет на 1 день: ' + appData.moneyPerDay + 'рублей');
	console.log(appData.moneyPerDay);
}
detectDayBudget();

console.log(appData);

function detectLevel() {
	if (appData.moneyPerDay > 5000) {
		console.log('высокий доход');
	} else if (appData.moneyPerDay > 2000){
		console.log('средний доход');
	} else if (appData.moneyPerDay <= 2000) {
		console.log('низкий доход');
	} else {
		console.log('что-то пошло не так!');
	}	
}
detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?', ''),
				persent = +prompt('Под какой процент?');
		
		appData.moneyIncome = save / 12 * persent / 100;
		alert('Ваши доход с депозита в месяц: ' + appData.moneyIncome);
	}
}
checkSavings();

function chooseOptExpenses() {
	let optionalExpenses = {};
	let b = 0;
	for (let i = 0; i < 3; i++){
		let a	= prompt('Статья необязательных расходов?', '');
		optionalExpenses[b] = a;
		b++;
	}
		return console.log(optionalExpenses);
}
chooseOptExpenses();



















