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

  addEventKeyDown = () => {
    window.addEventListener("keydown", (e) => {
      if (e.code == "ArrowUp") {
        let goUp = this.element.offsetTop;
        console.log(goUp);
        this.element.style.top = goUp - 40 + "px";
      }
      if (e.code == "ArrowRight") {
        let goRight = this.element.offsetLeft;
        console.log("goRight: ", goRight);
        this.element.style.left = goRight + 40 + "px";
      }
      if (e.code == "ArrowDown") {
        let goDown = this.element.offsetTop;
        console.log("goDown: ", goDown);
        this.element.style.top = goDown + 40 + "px";
      }
      if (e.code == "ArrowLeft") {
        let goLeft = this.element.offsetLeft;
        console.log("goLeft: ", goLeft);
        this.element.style.left = goLeft - 40 + "px";
      }
    });
  };
}

const Init = () => {
  const str = ".block"; // Example = [.block или #block]
  const selector = str.charAt() === "." ? "div" : "p";
  const attribute = str.charAt() === "." ? "class" : "id";
  const classElement = str.slice(1);

  let element = new DomElement(selector, attribute, classElement, "250px", "250px", "blue", "12px");
  element.create();
  element.addEventKeyDown();
};

Init();
