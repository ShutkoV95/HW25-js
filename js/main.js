let balance = 1000;
let limit = 5000;
let limitDay = 6000;

while (true) {
    let choice = prompt('1. Снять деньги; 2. Внести деньги 3. Баланс; 4. Выход');

    if (choice == '1') {
        getMoney();
        getBalance();
    } else if (choice == '2') {
        putMoney();
        getBalance();
    } else if (choice == '3') {
        getBalance();
    } else if (choice == '4') {
        userExit();
        break;
    }
}

function getMoney() {
    let summ = Number(prompt('Введите сумму для снятия'));
    if (summ <= balance){
        alert('Вы снимаете: ' + summ);
        balance -= summ;
    } else if (summ > balance) {
        alert('Недостаточно средств')
    }
}

function putMoney() {
    let summ = Number(prompt('Введите сумму для внесение'));
    if (summ < limit ) {
        alert('Вы вносите: ' + summ);
        balance += summ;
    } else if (summ >= limit) {
        alert('Сумма взноса не может быть больше: ' + limit );
    } 
}

function getBalance() {  
    if (balance < limitDay) {    
    alert('Баланс: ' + balance);
    } else if (balance >= limitDay) {    
        alert('В день сумма взноса не может быть больше: ' + limit );
        }
}

function userExit() {
    alert('Выход');
}




/**
 * Добавить возможность ложите деньги +
 * Сделать проверки для внесения и снятия средств
 * Максимальня сумма/день для внесения 5000
 * */