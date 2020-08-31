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
