/*
 * Парс числа с Number.parseInt() и Number.parseFloat() - отрезает буквы
 */

let elementWidth = "50px";

// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth); // 50

let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits) - отсекает
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
let quantity = "30";
let value = "Эту строку невозможно привести к числу";

// console.log(Number(quantity));
// console.log(Number(value));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(base ** power);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

//  2. попросить ввести степень и сохранить в переменную

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

//  3. Возвести введенные данные в степень и вывести
// const result = base ** power;

// console.log(result);

// Генерим псевдослучайные  числа

// - Math.random()
// - Math.round()

// Math.random() * (max - min) + min;
// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// --------------------------------------------

// const colors = [
//   "orange",
//   "tomato",
//   "teal",
//   "deeppink",
//   "skyblue",
//   "green",
//   "red",
//   "yellow",
//   "lightgreen",
// ];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];
// // console.log(color);

// document.body.style.backgroundColor = color;

// ----------------------------------------------------

// console.log(Boolean(" "));

// -------------------------------------------------------

// Оператор ветвления if

// if (условие, которое должно приводить к true) {
// если приводится к false, то тело функции не выполняется
// }

// Оператор ветвления if...else

// if (false) {
// } else {
//   это тело выполняется, если первое условие false
// }

// Оператор ветвления  else...if

// --------------------------------------------------------------

// Тернарный оператор

// const balance = -1000;
// let message;

// if (balance >= 0) {
//   message = "Позитивный баланс";
// } else {
//   message = "Негативный баланс";
// }

// const message = balance >= 0 ? "Позитивный баланс" : "Негативный баланс";

// console.log(message);

// ----------------------------------------------------------------

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 4;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   prise = 30;
// } else if (stars === 3) {
//   prise = 50;
// } else if (stars === 4) {
//   prise = 70;
// } else if (stars === 5) {
//   prise = 120;
// } else {
//   console.log('Такого кол-ва звёзд нет');
// }

// switch (stars) {
//   case 1: {
//     price = 20;
//     break;
//   }

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
// console.log("Такого кол-ва звёзд нет");
// }
// switch используется, когда одна и та же переменная сравнивается с разными значениями
// console.log(price);

// Если одинаковая цена для разных отелей (выполняется условие или...или):

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */
// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Такого кол-ва звёзд нет");
// }

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

//

// 1. сделать переменные
// const option = 1;
// let message = "";

// // 2. сделать switch 1 2 3
// switch (option) {
//   case 1:
//     message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
//     break;

//   case 2:
//     message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//     break;

//   case 3:
//     message = "Посылка будет отправлена сегодня";
//     break;

//   default:
//     message = "Вам перезвонит менеджер";
// }

// console.log(message);

// 3. в каждом кейсе записать в message строку

// 4. сделать lo message

// -----------------------------------------------------

// Цикл for

// for (инициализация; условие; пост-выражение){
//тело цикла
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// console.log("qwe");

// i += 3 это i = i + 3

// for (let i = 10; i >= 5; i -= 2) {
//   console.log(i);
// }
// console.log("qwe");

/*
 * Pre-increment и Post-increment
 */

// i++ - это пост-инкремент
// ++i - это пре-инкремент

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// // 1. сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// // 2. перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3. сгенерить случайную ЗП
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );

//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   // 4. прибавить к тоталу.
//   totalSalary += salary;
// }

// // 5. вывести в лог
// console.log("totalSalary: ", totalSalary);

// ---------------------------------------------------------

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

//  1. вары
// const min = 5;
// const max = 13;
// let total = 0;

// // 2. for от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   console.log(i);

// 3. проверяем остаток от деления
// 10 %  3 остаток от деления 1
//   if (i % 2 === 0) {
//     console.log("чётное: ", i);

//     // 4. пишем в сумму
//     total += i;
//   }

// логика от обратного

//   if (i % 2 !== 0) {
//     console.log("не чётное: ", i);
//     continue; // - если это не чётное число, то пропускай (директива continue - не прерывает цикл, а прерывает текущую итерацию)
//   }

//   console.log("чётное: ", i);

//   total += i;
// }
// console.log("total: ", total);

// ---------------------------------------------------------

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

//  1 вары
// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (balance >= payment) {
//   console.log("ok");

//   balance -= payment;
//   console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("На счету недостаточно средств для проведения операции!");
// }
// console.log("Операция завершена");

// ---------------------------------------------------------

/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// // [100 до 1000):
// // '[' - включительно,
// // ')'- не включая
// // Пример: [1, 5) // 1, 2, 3, 4

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("бронзовый партнёр, скидка 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log("серебрянный партрёр, скидка 5%");
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log("золотой партрёр, скидка 10%");
//   discount = 0.1;
// } else {
//   console.log("не партнёр, скидка 0%");
// }

// payment -= payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);

// ---------------------------------------------------

const btnAdd = document.querySelector("button[data-add]");
const resetBtn = document.querySelector("button[data-reset]");
const valueInput = document.querySelector("input[data-value]");
const outputEl = document.querySelector(".js-output span");

let total = 0;

btnAdd.addEventListener("click", () => {
  console.log("click hehhe");

  const value = Number(valueInput.value);

  total += value;
  console.log(value);

  outputEl.textContent = total;
  valueInput.value = "";
});

resetBtn.addEventListener("click", () => {
  total = 0;
  outputEl.textContent = total;
});
