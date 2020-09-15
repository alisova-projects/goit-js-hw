/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += `-${i}`;
// }

// for (let friend of friends) {
//   console.log(friend);
// }

// console.table(friends);

// Пустой массив
// const arr = [];

// ----------------------------------------------------------

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

// ---------------------------------------------------------

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   // тут лучше фор...оф
//   const number = numbers[i];

//   if (number % 2 === 0) {
//     console.log("Чётное: ", number);

//     total += number;
//   }
// }
// console.log("Total: ", total);

// или - логика от обратного

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log("Эту итерацию нужно пропустить", number);
//     continue;
//   }

//   console.log(`${number} - четное!!!!`);
//   total += number;
// }

// console.log("Total: ", total);

// ---------------------------------------------------------
/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "aj4xth3m4n";
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);
// ------------------------------------------------------------

// for (const login of logins) {
//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// --------------------------------------------------------

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   //   console.log(number);

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// самое большое число

// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log(biggestNumber);

// ----------------------------------------------------------

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";

// for (const friend of friends) {
//   string += friend + ",";
// }

// Должно получиться 'Mango,Poly,Kiwi,Ajax,' - old school

// string = string.slice(0, string.length - 1); // срезали запятую, но метод не деструктивный
// Должно получиться 'Mango,Poly,Kiwi,Ajax'

// const string = friends.join(", "); // best practice
// console.log(friends);
// console.log(string);

// --------------------------------------------------------------

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";

// for (const letter of letters) {
//   console.log(letter);

//   if (letter === letter.toLocaleLowerCase()) {
//     console.log("Эта буква в нижнем регистре!!! - ", letter);

//     invertedString += letter.toUpperCase();
//   } else {
//     console.log("Эта буква в верхнет регистре!!! - ", letter);
//     invertedString += letter.toLocaleLowerCase();
//   }

//   const isEqual = letter === letter.toLocaleLowerCase();
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLocaleLowerCase();
// }

// console.log("invertedString: ", invertedString);
//  -----------------------------------------------------------

// ---------------------------------------------------------------

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// const title = "Top 10 benefits of React framework";

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// const slug1 = title.toLowerCase().split(" ").join("-");

// console.log(slug1);

// ------------------------------------------------------------

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = "Карточка-3";
// const index = cards.indexOf(cardToRemove);

// cards.splice(index, 1);
// console.log(index);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = "Карточка-6";
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.log(cards);

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = "Карточка-4";
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, "Обновленная карточка-4");
// console.log(cards);
