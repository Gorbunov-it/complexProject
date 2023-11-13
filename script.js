"use strict";
// 1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;
// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = "en";
let multiplication = 1;
const lang_array = [];

// 2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.
const arrayNum = [...num.toString()].map(Number);
for (let i = 0; i <= arrayNum.length - 1; i++) {
  multiplication *= Number(arrayNum[i]);
}

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let degree = multiplication ** 3;

// 4) Вывести в консоль первые 2 цифры полученного числа
let strDegree = String(degree).slice(0, 2);

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//  a) через if,
if (lang == "ru") {
  console.log("'Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'");
} else {
  console.log("'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'");
}
//  b) через switch-case
switch (lang) {
  case "ru":
    console.log("'Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'");
    break;
  case "en":
    console.log("'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'");
    break;
}
//  c) через многомерный массив без ифов и switch.

lang_array["ru"] = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
lang_array["en"] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 2). У нас есть переменная namePerson.
const namePerson = "Иван";
// Если значение этой переменной “Артем” то вывести в консоль “директор”,
// если значение “Александр” то вывести в консоль “преподаватель”,
// с любым другим значением вывести в консоль “студент”
//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
const result = namePerson === "Артем" ? "директор" : namePerson === "Александр" ? "преподаватель" : "студент";

// Вывод:
//результат умножения
console.log(multiplication);

// Результат возведеннии в степень
console.log(degree);

// Вывод в консоль первые 2 цифры полученного числа
console.log(Number(strDegree));

console.log(lang_array[lang]);

// Должность
console.log(result);
