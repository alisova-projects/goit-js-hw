// Пустой массив
// const arr = [];
// Массив clients с тремя элементами
// const clients = ["Mango", "Poly", "Ajax"];

// console.log(clients);

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);

// clients[0] = "Kiwi";
// console.log(clients[0]);

// clients[3] = "Alex";
// console.log(clients[3]);
// console.log(clients);
// length вернет текущую длину массива
// console.log(clients.length); // 3

// clients.length = 6;
// console.log(clients.length);
// console.log(clients);
// console.log(clients[6]);

// clients.length = 2;
// console.log(clients);
// for (let i = 0; i < clients.length; i += 1) {
//   console.log("Клиент: ", clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 5; i += 1) {
//   numbers.push(`module-${i}`);
// }
// console.log(numbers);
// Итерация по массиву

// const clients = ["Mango", "Ajax", "Poly"];

// for (const mudak of clients) {
//   console.log(mudak);
// }

// // Итерация по строке
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const find = "Poly";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === find) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   message = "Клиента с таким именем нету в базе данных!";
// }
// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 16;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше, чем ${threshold}: ${numbers[i]}`);
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log(matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     total += matrix[i][j];
//   }
// }
// console.log(total);

// let a = 5;
// Присвоение по значению, в памяти будет создана еще
// одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// Изменим значение a
// a = 10;
// console.log(a); // 10
// Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// split
// const message = "Welcome to Bahamas!";

// Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(" ")); // ["Welcome", "to", "Bahamas!"]

// Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push(1);
// console.log(stack); // [1]

// stack.push(2);
// console.log(stack); // [1, 2]

// stack.push(3);
// console.log(stack); // [1, 2, 3]

// // Удаляем элементы из конца массива
// console.log(stack.pop()); //  3
// console.log(stack); // [1, 2]

// console.log(stack.pop()); //  2
// console.log(stack); // [1]

// console.log(stack.pop()); //  1
// console.log(stack); // []

// console.log(stack.pop()); //  undefined

// // Предположим, что у вас есть массив с названиями цветов в виде строк.
// const colors = ["red", "green", "blue"];

// // Следующая операция помещает один новый элемент перед вторым элементом.
// colors.splice(2, 0, "purple");

// // Теперь массив цветов содержит четыре элемента
// // с новым элементом, вставленным во вторую позицию.
// console.log(colors); // ["red", "green", "purple", "blue"]

// // Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
// colors.splice(1, 0, "yellow", "pink");
// console.log(colors);
// let s = "qwerty";
// console.log(s.indexOf("b"));

// let i = true && 5 > 3 && "javascript";
// console.log(i);

// let s = "qwerty";
// console.log(s.includes("b"));

// const valueB = "25px";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // 'number'
