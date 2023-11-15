"use strict";

// _str = 123;
const _str = " Cоздайте функцию, которая принимает 1 аргумент (название произвольное) ";

// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
const fun = function funValidStr(variable) {
  if (typeof variable === "string") {
    variable = variable.trim();
    return variable.length > 30 ? variable.slice(0, 30) + "..." : variable;
  } else {
    return "в качестве аргумента передана не строка";
  }
};

console.log(fun(_str));
