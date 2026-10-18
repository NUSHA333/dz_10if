const num1 = 44;
const num2 = 10;
const num3 = 644;

if( num1 > num2 && num1 > num3){
    console.log(num1);
} else if(num2 > num1 && num2 >num3){
    console.log(num2);
} else if(num3 > num1 && num3 >num2 ){
    console.log(num3)
};

const age = 17;

if( age>= 18 && age <= 60){
    console.log(true)
}else{
    console.log(false)
};

const username = "master";
const password = "123";

const user = prompt("Введите useranme");
const pass = prompt("Введите password");

if( user === username && pass === password){
    console.log("Вы успешно вошли в систему");
}else{ 
    console.log("Некорректный username или пароль");
};

const ans1 = "Париж";
const ans2 = "6";
const ans3 = "Да";
const ans4 = "Ф";
const ans5 = "Земля";

const user1 = prompt("1. Столица Франции?");
const user2 = prompt("2. Сколько материков на планете?");
const user3 = prompt("3. Да или Нет?");
const user4 = prompt("4. Какая буква вошла в алфавит самой последней?");
const user5 = prompt("5. На какой планете мы живём?");

let score = 0;

if( ans1 === user1){
    score++;
}if( ans2 === user2 ){
    score++;
}if( ans3 === user3){
    score++;
}if( ans4 === user4){
    score++;
}if( ans5 === user5){
    score++;
}    

console.log( score );

const num = 13;

if (num % 2 === 0 || num % 7 === 0) {
    console.log("Подходит");
} else {
    console.log("Не подходит");
}

const price = Number(prompt("Введите сумму покупки:"));

if (price > 5000) {
    console.log(price * 0.9);
} else {
    console.log(price);
}

const lett = 'y';

if( lett === 'a' || lett === 'e' || lett === 'i' || lett === 'o' || lett === 'u'){
    console.log(true);
} else{
    console.log(false);
}

const number = Number(prompt("Введите число:"));
const percent = Number(prompt("Введите процент:"));

const result = number * percent / 100;

console.log(result);