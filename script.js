"use strict";

const blockFirstDate = document.querySelector("#blockFirstDate");
const blockSecondDate = document.querySelector("#blockSecondDate");

//  a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
const getFirstDate = () => {
  const date = new Date();

  String.prototype.firstLetterToUppercase = function () {
    return this[0].toUpperCase() + this.slice(1);
  };

  const getLocalDate = () => {
    const localDate = date.toLocaleString("ru-RU", { dateStyle: "full" });
    const letterDate = localDate.replace("г.", "года,");
    return "а) Сегодня " + letterDate.firstLetterToUppercase();
  };

  // [час, часа, часов]
  // [минута, минуты, минут]
  // ["секунда", "секунды", "секунд"]
  const getFormats = (varieble, format) => {
    varieble = Math.abs(varieble) % 10;
    if (varieble > 1 && varieble < 5) {
      return format[1];
    }
    if (varieble == 1) {
      return format[0];
    } else {
      return format[2];
    }
  };

  const getTimeDate = () => {
    let timeDate = date.toLocaleString("ru-RU", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return timeDate;
  };

  const getformatDate = () => {
    let formatDate = getTimeDate().split(":");
    const getFormatHours = formatDate[0] + " " + getFormats(formatDate[0], ["час", "часа", "часов"]);
    const getFormatMinuts = formatDate[1] + " " + getFormats(formatDate[1], ["минута", "минуты", "минут"]);
    const getFormatSeconds = formatDate[2] + " " + getFormats(formatDate[2], ["секунда", "секунды", "секунд"]);
    formatDate = getFormatHours + " " + getFormatMinuts + " " + getFormatSeconds;
    return formatDate;
  };

  const startFirstDate = () => {
    const locatDate = getLocalDate();
    const formatDate = getformatDate();
    blockFirstDate.innerHTML = locatDate + " " + formatDate;
  };

  startFirstDate();
};

// б) '04.02.2020 - 21:05:33'
const getSecondDate = () => {
  const date = new Date();
  let secondDate = date.toLocaleString("ru-RU");
  blockSecondDate.innerHTML = `б) ${secondDate.replace(",", " -")}`;
};

const getDate = () => {
  getFirstDate();
  getSecondDate();
};

setInterval(() => getDate(), 1000);
