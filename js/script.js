let startBtn = document.getElementById('start'),
    budgetvalue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn =         document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn =            document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('optionalexpenses-item'),


    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;


startBtn.addEventListener('click', function(){
    money = +prompt("Ваш бюджет на месяц ?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while (isNaN(money) || money == '' || money == null ){
        money = prompt("Ваш бюджет", "");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetvalue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1; //Так как отчёт начинается с нуля
    dayValue.value = new Date(Date.parse(time)).getDate();

});

expensesBtn.addEventListener('click',function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length;i++ ){
        let a = expensesItem[i].value,
            b = expensesItem[++ i].value;
        
        if ((typeof(a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50){
            appData.expenses[a] = b;
            sum += +b;

        }   else{
            i = i -1;
        }  
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click',function(){
    for (let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';

    }
});

countBtn.addEventListener('click',function(){

    if (appData.budget != undefined){

    

        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100){
            levelValue.textContent = "Минимальный уровень достатка";
        
        }else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){
            levelValue.textContent = "Средний уровень достатка";
        }else if(appData.moneyPerDay >2000){
            levelValue.textContent = "Произошла ошибка";
        }
    }else{
        dayBudgetValue.textContent = "Произошла ошибка";
    }
    });

incomeItem.addEventListener('input',function(){
    let items = income.value;
    appData.Income = items.split(", ");
    incomeValue.textContent = appData.Income;
});    

checkSavings.addEventListener('click', function(){
    if ( appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
sumValue.addEventListener('input',function(){
    if ( appData.savings == true){
        let sum = +sumValue.value;
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }

});
percentValue.addEventListener('input',function(){
    if ( appData.savings == true){
        let sum = +sumValue.value;
        percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }

});
let appData = {

    budget: money,
    expenses: {},
    optionExpenses: {},
    income: [],
    timeData: time,
    savings: false,
    chooseExpenses: function(){
       
        
        
        
    
}

};

