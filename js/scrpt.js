"use strict";

const body = document.body;

class DomElement {
  constructor(selector, attribute, className, width, height, bg, fontSize) {
    this.selector = selector;
    this.attribute = attribute;
    this.class = className;
    this.width = width;
    this.height = height;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  create() {
    this.element = document.createElement(this.selector);
    this.element.setAttribute(this.attribute, this.class);
    this.element.style.cssText = `selector: ${this.selector}; width: ${this.width}; height: ${this.height}; background: ${this.bg}; fontSize: ${this.fontSize}; position: absolute; text-align: center; color: white; line-height: 250px;`;
    this.element.textContent = "Какой-то текст";
    body.append(this.element);
  }
}

const Init = () => {
  const str = ".block"; // Example = [.block или #block]
  const selector = str.charAt() === "." ? "div" : "p";
  const attribute = str.charAt() === "." ? "class" : "id";
  const classElement = str.slice(1);

  let element = new DomElement(selector, attribute, classElement, "250px", "250px", "blue", "12px");
  element.create();
};

Init();
