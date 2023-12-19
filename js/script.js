"use strict";

// Класс «Работник».
class Worker {
  constructor(object) {
    this.name = object.name;
    this.surname = object.surname;
    this.patronymic = object.patronymic;
    this.age = object.age;
    this.jobTitle = object.jobTitle;
    this.organization = object.organization;
    this.discharge = object.discharge;
    this.haveChildren = object.haveChildren;
    this.dateOfEmployment = object.dateOfEmployment;
  }
}

// Класс «Слесарь»
// Слесарь-механик может работать в приборостроении, машиностроении, судостроении, автомобильной промышленности, авиации
class Locksmith extends Worker {
  constructor(object) {
    super(object);
    this.specialization = object.specialization;
    this.experience = object.experience;
    this.dateOfDismissal = object.dateOfDismissal;
  }
}

// Класс «Водитель»
// «Водитель» может работать как Личный водитель, Водитель-экспедитор, Водитель спецтехники, Таксист
class Driver extends Worker {
  constructor(object) {
    super(object);
    this.specialization = object.specialization;
    this.experience = object.experience;
    this.dateOfDismissal = object.dateOfDismissal;
  }
}

const locksmith = new Locksmith({
  surname: "Машуков",
  name: "Ефрем",
  patronymic: "Гаврннлович",
  age: 29,
  jobTitle: "Слесарь-механик",
  organization: "ПАО «Сталь»",
  discharge: "4-й разряд",
  haveChildren: true,
  dateOfEmployment: "01.01.2023",
  specialization: "машиностроение",
  experience: "10 лет",
  dateOfDismissal: "",
});

console.log("locksmith: ", locksmith);

const driver = new Driver({
  surname: "Абрамов",
  name: "Денис",
  patronymic: "Елизарович",
  age: 30,
  jobTitle: "«Водитель»",
  organization: "АО «Стройком»",
  discharge: "7-й разряд",
  haveChildren: false,
  dateOfEmployment: "25.07.2020",
  specialization: "Личный водитель",
  experience: "7 лет",
  dateOfDismissal: "",
});

console.log("driver: ", driver);
