"use strict";

// 1) Создать функцию-конструктор DomElement, который
//    содержит свойства
//   - selector,
//   - height,
//   - width,
//   - bg,
//   - fontSize
// содержит метод, который создает элемент на странице в зависимости от условия:
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector начинается с решетки # то создаем параграф с id
// пример:
// если передана строка '.block',
// то функция конструктор создает элемент с class="block"
// если передана строка '#best',
// то функция конструктор создает элемент с id = best"
// с помощью cssText задавать стили:
//   - высотой - height,
//   - шириной - width,
//   - background - bg
//   - размер текста fontSize
// Внутрь созданного блока записывать любой текст. Метод записи может быть любым.
// 2) Создать новый объект на основе класса DomElement
// 3) Вызвать его метод чтобы создать элемент на странице

const body = document.body;

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  create() {
    this.element = document.createElement("input");
    this.element.style.height = this.height;
    this.element.style.width = this.width;
    this.element.style.backgroundColor = this.bg;
    this.element.style.fontSize = this.fontSize;
    body.append(this.element);
  }

  addEventListener = () => {};
}

let input = new DomElement(null, "20px", "250px", "#fff", "12px");
input.create();
