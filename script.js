"use strict";

// _str = 123;
const _str = " Cоздайте функцию, которая принимает 1 аргумент (название произвольное) ";

// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
const fun = function (variable) {
  if (typeof variable === "string") {
    return variable.trim().length > 30 ? variable.slice(0, 30) + "..." : variable;
  } else {
    return "в качестве аргумента передана не строка";
  }
};

console.log(fun(_str));
