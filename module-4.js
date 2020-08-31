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
// //2. фкнкция получаетя элемент массива
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

// ---------------------------------------------------

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
