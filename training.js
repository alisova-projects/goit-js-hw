// Exercise #1

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 8;
// let totalSalary = 0;
// let salary;

//  Твой код

// 1. сгенерить случайное число
// 2. сожить все случайные числа
// 3. вывести

// for (let i = 0; i < employees; i += 1) {
//   salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   totalSalary = totalSalary + salary;
// }
// console.log(totalSalary);

// Exercise #2

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     total = total + i;
// console.log(i);
//   }
// }
// console.log(total);

// Exercise #3

// Задача 1 - 6
// Использование for, charCodeAt
// Напиши код, который принимает строку символов в переменную source и выводит строку в переменную message.

// В message каждый символ строки source заменяется строкой вида

// "a: 97,\n"
// где

// а - это символ из строки source,
//     97 - код для символа а из Unicode UTF - 8,
// \n - перенос строки.
// Например на входе у нас будет такая строка

// const source = 'Привет!'
// А в результате должна получиться такая:

// console.log(message);
/*
"П: 1055,
р: 1088,
и: 1080,
в: 1074,
е: 1077,
т: 1090,
!: 33,
"
*/

// const source = "Привет!";
// let message = "";

// for (let i = 0; i < source.length; i += 1) {
//   message += `${source[i]}: ${source.charCodeAt(i)},\n`;
// }
// console.log(message);
