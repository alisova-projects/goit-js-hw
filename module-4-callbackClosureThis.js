// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = "HOCs are awesome";
//   callback(string);
// };

// higherOrderFunction(printMessage);
// ---------------------------------------------------
// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);

// ------------------------------------
// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// repeat(3, printValue);

// repeat(3, prettyPrint);
// ----------------------------------------------
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, (value) => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels);
// -------------------------------------------
// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = "HOCs are awesome";
//   callback(string);
// };

// higherOrderFunction(printMessage);
// -----------------------------------------------
// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }
// function alertFinished() {
//   alert("Finished my homework");
// }
// doHomework("math", alertFinished);
// -----------------------------------------------

/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);

// -----------------------------------------------------------

/*
 * функция doMath(a, b, callback)
 */

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);
// ----------------------------- или

// doMath(2, 3, function (x, y) {
//   //инлайн-функция
//   return x + y;
// });

// doMath(10, 8, function (x, y) {
//   return x - y;
// });
// ------------------------------------------

// const onGetPositionSuccess = function (position) {
//   console.log("Это вызов onGetPositionSuccess");
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log("Это вызов onGetPositionError");
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );
// ----------------------------------------

/*
 * Отложенный вызов: интервалы
 */

// const callback = function () {
//   console.log("Через 2 секунды внутри колбека в таймауте");
// };

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

// const onRequestSuccess = function (response) {
//   console.log("Вызов функции onRequestSuccess после успешного ответа бекенда");
//   console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

/*
 * Фильтр
 */

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     // console.log(test(el))
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };

// //1. надо передать функцию
// //2. функция получаетя элемент массива
// //3. если элемент массива удовлетворяет условию, то функция вернёт тру
// //4. если элемент массива не удовлетворяет условию, вернёт фолс

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//   return value <= 4; //callback2
// });
// console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// ----------------------------------------
//   ЗАМЫКАНИЯ - вернуть из функции другую функцию.

/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

// const fnA = function (parameter) {
//   const innerVariable = "значение внутренней переменной функции fnA";

//   const innerFunction = function () {
//     console.log(innerVariable);
//     console.log("Это вызов внутренней функции innerFunction");
//   };

//   return innerFunction;
// };

// const fnB = fnA();

// fnB();

// console.log(fnB);
// console.dir(fnB);

// ************************************

// const makeShef = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeShef("Mango");

// mango("супик");
// mango("котлетки");

// ************************************

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

// или:

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));

// -----------------------------------------------------------------

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       if (amount > 1000) {
//         return 'Ты офигел?';
//       }

//       salary += amount;
//     },
//     lower(amount) {
//       salary -= amount;
//     },
//     current() {
//       return `Текущая зарпалата ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(10000000));

// console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());
// ---------------------------------------------------

// ---------------------------------------------------

// let string = "text" * 2;
// console.log(string === NaN);

// ---------------------------------------------------

/*
 * Стрелочные функции - Arrow Function
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//   console.log(arguments);
//   return a + b + c;
// };

// у стрелочной функции нет локльной переменной arguments
// но можно собрать все аргументы rest:

// const addArrow = (...args) => {
//   console.log(args);
// };

// const addArrow = (a, b, c) => a + b + c; // параметров может не быть - ставим ();
//так же может быть один параметр, тогда можно писать его без пузатых скобок

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

// -----------------------------

// когда стрелочная функция возвращает объект:

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };
// console.log(fnA());

// // или

// const arrowFnA = () => ({ arrowA: 5 });
// console.log(arrowFnA());

// --------------------------------------------------------------

/*
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// // showTag(); // undefined

// const user = {
//   tag: "Mango",
// };

// user.showUserTag = showTag;
// console.log("user", user);

// user.showUserTag();

// -------------------------------------------------------
/*
 * Тренируемся 5
 */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment); // undefined // counter.increment здесь не вызывается,
// // тут передаётся ссылка на функцию, которая лежит в объекте counter и ничего не знает про этот объект
// updateCounter(5, counter.decrement); // undefined

// при передаче метода объекта как колбека,
// контекст не сохраняется

// ------------------------------------------------------

/*
 * call и apply
 */
// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// // changeColor.call(hat, 'orange');
// // console.log(hat);

// const sweater = {
//   color: "green",
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

/*
 * bind
 */

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

/*
 * counter
 */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);

// -----------------------------------------------------------------

// COUNTER

// const counter = {
//   value: 0,
//   increment() {
//     console.log("increnent -> this ", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("decrement -> this ", this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector(".js-decrement");
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector(".js-value");

// decrementBtn.addEventListener("click", function () {
//   console.log("Кликнули на декремент");

//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", function () {
//   console.log("Кликнули на инкремент");

//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
