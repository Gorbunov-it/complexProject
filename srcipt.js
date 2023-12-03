"use strict";

const body = document.querySelector("body");
const books = document.querySelector(".books");
const book = document.querySelectorAll(".book");
const banner = document.querySelector(".adv");

//Функция изменения фона
const replaceImageBody = () => {
  body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
};

const creatListBooks = () => {
  books.append(book[1]);
  books.append(book[0]);
  books.append(book[4]);
  books.append(book[3]);
  books.append(book[5]);
  books.append(book[2]);
};

const creatTitle = () => {
  book[4].querySelector("h2 > a").innerHTML = "Книга 3. this и Прототипы Объектов";
};

const creatBookThree = () => {
  let ul = book[0].querySelector("ul");
  const li = book[0].querySelector("ul").querySelectorAll("li");
  ul.append(li[0]);
  ul.append(li[1]);
  ul.append(li[2]);
  ul.append(li[3]);
  ul.append(li[6]);
  ul.append(li[8]);
  ul.append(li[4]);
  ul.append(li[5]);
  ul.append(li[7]);
  ul.append(li[9]);
  ul.append(li[10]);
};

const creatBookFive = () => {
  let ul = book[5].querySelector("ul");
  const li = book[5].querySelector("ul").querySelectorAll("li");
  ul.append(li[0]);
  ul.append(li[9]);
  ul.append(li[3]);
  ul.append(li[4]);
  ul.append(li[2]);
  ul.append(li[6]);
  ul.append(li[7]);
  ul.append(li[5]);
  ul.append(li[8]);
  ul.append(li[10]);
};

const creatBookSix = () => {
  const li = book[2].querySelector("ul").querySelectorAll("li");
  let _li = document.createElement("li");
  _li.append("Глава 8: За пределами ES6");
  li[8].after(_li);
};

//Функция изменения рекламы
const deleteBanner = () => banner.remove();

//Функция start
const startScript = () => {
  replaceImageBody();
  creatListBooks();
  creatTitle();
  creatBookThree();
  creatBookFive();
  creatBookSix();
  deleteBanner();
};

startScript();
