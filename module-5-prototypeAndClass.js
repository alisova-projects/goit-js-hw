// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior("Poly", 200, "sword");
// console.log(poly);

// ----------------------------------------------

// Класс со статическими свойствами и методами
// class Calc {
//   // Класс-калькулятор для двух аргументов
//   constructor() {}

//   // Метод как замена свойству
//   static get PI() {
//     return 3.14;
//   }

//   // Статический метод +
//   static add(...args) {
//     return args.reduce(function (acc, next) {
//       return acc + next, 0;
//     });
//   }

//   // Статический метод *
//   static mult(...args) {
//     return args.reduce((acc, next) => acc * next, 1);
//   }
// }

// console.log(Calc.PI); // 3.14
// console.log(Calc.add(2, 3, 4)); // 9
// console.log(Calc.mult(12, 3, 4)); // 144

// **********************************************************

/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);

// *********************************************************************

/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   // 2. Функция вызывается в контексте созданного объекта,
//   //    то есть в this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//   //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

//   // 4. Ссылка на обьект возвращается в место вызова new Car
// };

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this", this);
//   console.log("Hello :) ");
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// // console.log(Car.prototype);

// // 1. Если функция вызывается через new, создаётся пустой объект
// // const myCar = new Car({
// //   brand: 'Audi',
// //   model: 'Q3',
// //   price: 35000,
// // });
// // console.log(myCar);

// // myCar.sayHi();
// // myCar.changePrice(10000);

// // const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// // console.log(myCar2);

// // myCar2.sayHi();

// // const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// // console.log(myCar3);

// // myCar3.sayHi();

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// console.log(User.prototype);

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: "mango@mail.com", password: 1111111 });

// mango.changeEmail("my-new-mail@mail.com");
// // console.log(mango);
// /*
//  * Статические свойства и методы
//  * - Статические свойства и методы доступны только на самом конструкторе
//  * - В статических методах не нужен this
//  */

// User.message =
//   "Я статическое свойство, меня нет на экземплярах или в прототипе.";

// User.logInfo = function (obj) {
//   console.log("User.logInfo -> obj", obj);
//   console.log("Почта: ", obj.email);
//   console.log("Пароль: ", obj.password);
// };

// User.logInfo(mango);

// Object.keys()
// Object.value()

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

// ----------------------------------------------------------------

// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
//   onUpdate = () => null,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);

//   this.onUpdate = onUpdate;

//   this._bindEvents();
//   this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector("[data-increment]");
//   refs.decrementBtn = refs.container.querySelector("[data-decrement]");
//   refs.value = refs.container.querySelector("[data-value]");

//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener("click", () => {
//     console.log("CounterPlugin.prototype._bindEvents -> this", this);
//     this.increment();
//     this.updateValueUI();
//   });

//   this._refs.decrementBtn.addEventListener("click", () => {
//     console.log("CounterPlugin.prototype._bindEvents -> this", this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;

//   this.onUpdate();
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// new CounterPlugin({
//   rootSelector: "#counter-1",
//   step: 10,
//   initialValue: 100,
//   onUpdate: () => console.log("Это мой кастомный колбек для onUpdate"),
// });

// new CounterPlugin({ rootSelector: "#counter-2", step: 2 });

// ***********************************************************
// Babel - compiler / transpiler - штука, которая преобразовывает
// суперсовременный JS, в JS, который нужен браузеру

// чтобы сделать приватное свойство:
// #model = 'Q3'; - пишется на самом классе

// private properties in JS - youtube

// *********************************************************

/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

class Car {
  static description = "Класс описывающий автомобиль";

  static logInfo(carObj) {
    console.log("Car -> logInfo -> carObj", carObj);
  }

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
}

const myCar = new Car({ brand: "Audi", model: "Q3", price: 35000 });

console.log(myCar.model);
myCar.model = "Q4";
console.log(myCar.model);

console.log(myCar.price);
myCar.price = 50000;
console.log(myCar.price);

console.log(myCar);

// ----------------------------------------------------------

/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero {
  constructor({ name = "hero", xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const ajax = new Berserk({
  name: "ajax",
  xp: 500,
  weapon: "axe",
  warcry: "waaaaaaaah",
});

// console.log(ajax);

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp();

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует 🧙‍♂️`);
  }
}

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );
