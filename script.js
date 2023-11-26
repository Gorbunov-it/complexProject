"use strict";

const block = document.getElementById("block");
const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const date = new Date();
const currentDay = date.getDay();

const showWeek = function () {
  let day = "";
  for (let i = 0; i < week.length; i++) {
    if (week[i] === "Воскресенье" || week[i] === "Суббота") {
      day = `<i>${week[i]}</i>` + "<br>";
    } else {
      day = week[i] + "<br>";
    }
    if (week[i] === week[currentDay]) {
      day = `<b>${day}</b>`;
    }
    block.innerHTML += day;
  }
};

showWeek();
