"use strict";
// 1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.
let arrayNum = [...num.toString()].map(Number);
console.log(arrayNum.length);
//результат умножения
let multiplication = 1;
for (let i = 0; i <= arrayNum.length - 1; i++) {
  multiplication *= Number(arrayNum[i]);
}
console.log(multiplication);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let degree = multiplication ** 3;
console.log(degree);

// 4) Вывести в консоль первые 2 цифры полученного числа
let strDegree = String(degree).slice(0, 2);
console.log(Number(strDegree));

// Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = "en";
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//  a) через if,
console.log("\nчерез if");
if (lang == "ru") {
  console.log(`"Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"`);
} else {
  console.log(`'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'`);
}
//  b) через switch-case
console.log("\nчерез switch-case");
switch (lang) {
  case "ru":
    console.log(`"Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"`);
    break;
  case "en":
    console.log(`'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'`);
    break;
}
//  c) через многомерный массив без ифов и switch.
console.log("\nчерез многомерный массив без ифов и switch");
var lang_array = [];
lang_array["ru"] = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
lang_array["en"] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(lang_array[lang]);
// 2). У нас есть переменная namePerson.
const namePerson = "Иван";
// Если значение этой переменной “Артем” то вывести в консоль “директор”,
// если значение “Александр” то вывести в консоль “преподаватель”,
// с любым другим значением вывести в консоль “студент”
//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
const result = namePerson === "Артем" ? "директор" : namePerson === "Александр" ? "преподаватель" : "студент";
console.log(result);
