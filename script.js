"use strict";

// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

const block = document.getElementById("block");
const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let toDay = "";

const getCurrentDay = function () {
  const day = new Date().toLocaleString();
  const myDate = new Date(day.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1"));
  toDay = week[myDate.getDay()];
};

const Weekday = function () {
  week.push(week[0]);
  week.shift();
  showWeek(week);
};

const showWeek = function (array) {
  array.forEach((item) => {
    let day = "";
    if (item === "Суббота" || item === "Воскресенье") {
      day = `<i>${item}</i>` + "<br>";
    } else {
      day = item + "<br>";
    }
    if (item === toDay) {
      day = `<b>${day}</b>`;
    }
    block.innerHTML += day;
  });
};

const Start = function () {
  getCurrentDay();
  Weekday();
};

Start();
