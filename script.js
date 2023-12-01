"use strict";
// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
// 3) Для вывода в формате(б) напишите функцию, которая будет добавлять 0 перед значениями
// которые состоят из одной цифры(из 9: 5: 3 1.6.2019 сделает 09:05:03 01.06.2019)

//  a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
const fullDate = () => {
  let blockForFullDate = document.getElementById("blockForFullDate");
  const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  const getWeekDay = (date) => {
    const day = date.toLocaleString();
    const myDate = new Date(day.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1"));
    return week[myDate.getDay(date)];
  };

  const getDay = (date) => {
    return date.getDate();
  };

  const getMonth = (date) => {
    return month[date.getMonth(date)];
  };

  const getYear = (date) => {
    return date.getFullYear();
  };

  const getHour = (date) => {
    return date.getHours();
  };

  const getMinutes = (date) => {
    return date.getMinutes();
  };

  const getSeconds = (date) => {
    return date.getSeconds();
  };

  const outputDate = () => {
    const date = new Date();
    let weekDay = getWeekDay(date);
    let day = getDay(date);
    let month = getMonth(date);
    let year = getYear(date);
    let hour = getHour(date);
    let minutes = getMinutes(date);
    let seconds = getSeconds(date);
    blockForFullDate.innerHTML = `а) Сегодня ${weekDay}, ${day} ${month} ${year} года, ${hour} час ${minutes} минут ${seconds} секунды `;
    blockDate.innerHTML = `б) Сегодня ${weekDay}, ${day} ${month} ${year} года, ${hour} час ${minutes} минут ${seconds} секунды `;
  };

  outputDate();
};

const mediumDate = () => {
  let blockDate = document.getElementById("blockDate");

  const getDay = (date) => {
    return date.getDate(date);
  };

  const getMonth = (date) => {
    return date.getMonth(date);
  };

  const getYear = (date) => {
    return date.getFullYear(date);
  };

  const getHour = (date) => {
    return date.getHours(date);
  };

  const getMinutes = (date) => {
    return date.getMinutes(date);
  };

  const getSeconds = (date) => {
    return date.getSeconds(date);
  };

  const outputDate = () => {
    const date = new Date();
    let day = getDay(date);
    let month = getMonth(date);
    let year = getYear(date);
    let hour = getHour(date);
    let minutes = getMinutes(date);
    let seconds = getSeconds(date);
    blockDate.innerHTML = `б) ${day}.${month + 1}.${year} - ${hour}:${minutes}:${seconds}`;
  };

  outputDate();
};

const getDate = () => {
  fullDate();
  mediumDate();
};

setInterval(() => getDate(), 1000);
