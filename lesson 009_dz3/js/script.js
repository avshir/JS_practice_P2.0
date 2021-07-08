'use strict';

let money, time;
money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

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



// console.log(appData);
appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет на 1 день: ' + appData.moneyPerDay + 'рублей');
console.log(appData.moneyPerDay);


if (appData.moneyPerDay > 5000) {
	console.log('высокий доход');
} else if (appData.moneyPerDay > 2000){
	console.log('средний доход');
} else if (appData.moneyPerDay <= 2000) {
	console.log('низкий доход');
} else {
	console.log('что-то пошло не так!');
}





















