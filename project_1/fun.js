function chooseExpenses(){
	for (let i = 0; i < 2; i++){

		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
			&& a != '' && b != '' && a.length <50){
			console.log ("Good");
			appData.expenses[a] = b;
		} else {
			console.log ("пропущенно одно окно");
			i--;
		}
	};
}
chooseExpenses();

function detectDayBudget(){
	appData.moneyPerDay = (appData.budget / 30).toFixed(2);
	alert("Бюджет на один день" + appData.moneyPerDay + "руб");
}
detectDayBudget();

function detectLevel(){
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}
detectLevel();

function checkSavings(){
	if(appData.savings == true){
		let save = +prompt("Какова сумма накоплений"),
			percent = +prompt("Под какой процень?");
		
		appData.monthIcome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIcome);
	}
}
checkSavings();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов
	for (let i=0; i<=3; i++){
		let questionOptExpenses = prompt("Статья необязательных расходов?");
		appData.optionalExpenses[i] = questionOptExpenses;
		console.log(appData.optionalExpenses);
	}
}
chooseOptExpenses();