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
let strDegree = String(num).slice(0, 2);
console.log(Number(strDegree));
