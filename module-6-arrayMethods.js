/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// просто заменяет for или for...of

// не полезно:

// numbers.forEach(
//   function (number, index, array) {
//     console.log(number);
//     //  array[index] = 20;
//     console.log(this); // вызовется в контексте объекта { a: 5, b: 10 }.
//   },
//   { a: 5, b: 10 }
// );

// полезно (для перебора массива):

// numbers.forEach(function (number) {
//   console.log("number", number);
// });

// console.log(numbers);

// --------------------------------------------------------

/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map((number) => {
//   return number * 3;
// });

// // или

// const doubledNums = numbers.map((number) => number * 3);

// // console.log('numbers', numbers);
// console.log("doubledNums", doubledNums);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

/*
 * Получаем массив имён всех игроков
 */

// const playerNames = players.map((player) => player.name);
// console.log("playerNames", playerNames);

// const playerIds = players.map((player) => player.id);
// console.log("playerIds", playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log("res", res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

//делаем копию массива, не меняя его
// const updatedPlayers = players.map((player) => ({
//   ...player,
//   points: player.points * 1.1,
// }));
// console.log("updatedPlayers", updatedPlayers);
// console.table(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return player;
// });

// или
// в виде тернарника:

// const updatedPlayers = players.map((player) =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player
// );

// console.table(updatedPlayers);

// перебирающие методы нельзя break или continue!

// ************************************************************

/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const filterNumbers = numbers.filter((number) => number > 15);
// console.log("filterNumbers", filterNumbers);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// /*
//  * Получаем массив всех онлайн игроков
//  */

// const onlinePlayers = players.filter(({ online }) => online);
// console.log("onlinePlayers", onlinePlayers);

// /*
//  * Получаем массив всех оффлайн игроков
//  */

// const offlinePlayers = players.filter((player) => !player.online);
// console.log("offlinePlayers", offlinePlayers);

// /*
//  * Получаем список хардкорных игроков с временем больше 250
//  */

// const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
// console.log("hardcorePlayers", hardcorePlayers);

// ************************************************************

/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((number) => number === 10);
// console.log(number);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

/*
 * Ищем игрока по id
 */

// find чаще всего используются для уникальных свойств - айдишников
// const playerIdToFind = "player-3";

// const playerWithId = players.find((player) => player.id === playerIdToFind);
// console.log("playerWithId", playerWithId);

// функция

// const finPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find(({ id }) => id === playerId);
// };

// // или так:

// const findPlayerById = (allPlayer, playerId) =>
//   allPlayer.find(({ id }) => id === playerId);

// console.log(findPlayerById(players, "player-4"));
// console.log(findPlayerById(players, "player-1"));

/*
 * Ищем игрока по имени
 */
// const playerNameToFind = "Poly";
// const playerWithName = players.find(
//   (player) => player.name === playerNameToFind
// );
// console.log("playerWithName", playerWithName);

// *************************************************************

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

/*
 * Array.prototype.every() // каждый эл-т коллекции
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

// const isAllOnline = players.every((player) => player.online);
// console.log("isAllOnline", isAllOnline);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */
// const isAnyOnline = players.some((player) => player.online);
// console.log("isAnyOnline", isAnyOnline);

// const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
// console.log("anyHardcorePlayers", anyHardcorePlayers);

// ******************************************************************

//   REDUCE - берёт много и из этого "много" возвращает что-то одно

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   return acc + number;
// }, 0); // 0 - начальное значение аккумулятора. если его не задать, то первым значением будет первый эл-т массива: 5.

// console.log("total", total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );
// console.log("totalSalary", totalSalary);

/*
 * Считаем общее количество часов
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );
// console.log("totalTimePlayed", totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
// const
// console.log("totalAmount", totalAmount);

/*
 * Собираем все теги из твитов
 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((tags, tweet) => {
//   tags.push(...tweet.tags);

//   return tags;
// }, []);

//линтеры - проверщики кода / анализаторы кода

// они не любят, когда ты изменяешь/мутируешь параметры функции.
//чтобы они не возмущались, на каждой итерации создаём новый массив,
// куда сначала распыляем старый аккумулятор,
// затем распыляем туда tags

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags = ['html', 'css'] return  [...['js', 'nodejs'], ...['html', 'css']] ->  ['js', 'nodejs', 'html', 'css']

// console.log("allTags", allTags);

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   //   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }

//   acc[tag] = 1;
//   return acc;
// }, {});

// или

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {}
// );

// с return:

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log("tagsStats", tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

// const user = {
//   name: "Mango",
// };

// const key = "name";

// console.log(user[key]); // Mango
// // или
// console.log(user["name"]); // Mango

// ****************************************************************

/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

// const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log('letters', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// numbers.sort((curEl, nextEl) => curEl - nextEl);
// console.log("*Array.prototype.sort -> numbers", numbers);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

// const copy = [...numbers];
// copy.sort();
// console.log("numbers", numbers);
// console.log("copy", copy);

// или

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);

// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// // ascending-descending

// console.log("ascSortedNumbers", ascSortedNumbers);
// console.log("descSortedNumbers", descSortedNumbers);

/*
 * Кастомная сортировка сложных типов
 */
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// По игровому времени

// const sortedByBestPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );
// console.log("sortedByBestPlayers", sortedByBestPlayers);

// const sortedByWorstPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );
// console.log("sortedByWorstPlayers", sortedByWorstPlayers);

// По имени

// const byName = [...players].sort((a, b) => {
//   const result = a.name[0] > b.name[0];

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// });
// console.log("byName", byName);

// -----------------------------------------

// console.log("abc".charCodeAt(2));

// ***********************************************************

/*
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

/*
 * Array.prototype.flatMap(callback)
 * - Комбинация map + flat
 */

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.map((t) => t.tags).flat();
// console.log("tags", tags);

// или

// const tags = tweets.flatMap((t) => t.tags);
// console.log("tags", tags);

// + reduce

// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

// или всё вместе

// const stats = tweets
//   .flatMap((tweet) => tweet.tags)
//   .reduce(
//     (acc, tag) => ({
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {}
//   );

// console.log(stats);

// *********************************************************

/*
 * Цепочки вызовов - chaining
 */
// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// Цепочка предыдущих трёх
// const sorted = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .sort((a, b) => a - b);

// console.log(sorted);

/*
 * Сортируем тех кто онлайн по рангу
 * - сначала фильтруем
 * - потом сортируем
 */
// const players = [
//   { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
//   { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
//   { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
//   { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
//   { id: "id-5", tag: "Chelsy", isOnline: false, rank: 200 },
// ];

// const onlineAndSorted = players
//   .filter((player) => player.isOnline)
//   .sort((a, b) => a.rank - b.rank);
// console.log(onlineAndSorted);

/*
 * Chaining в методах объекта как jquery
 */

// const element = {
//   class: "",
//   hovered: false,
//   changeClass(cls) {
//     this.class = cls;

//     return this;
//   },
//   toggleHovered() {
//     this.hovered = !this.hovered;

//     return this;
//   },
// };

// element.toggleHovered().changeClass("open").toggleHovered();
// console.log(element);

// *****************************************************************

// - [Библиотека Lodash](https://github.com/lodash/lodash)
// - библиотека методов

// console.dir(_); // -переменная "подчёркивание" - это глобальная переменная,
// через которую лодеш открывает нам все свои методы

/*
 * isEmpty()
 */

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

const user = {
  name: "mango",
  location: {
    city: "Lviv",
  },
};

// console.log(_.get(user, 'location.city'));

// console.log(user.location.city);

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// }

// console.log(user?.location?.city);

/*
 * union()
 */
// сделать массив из уникальных значений
// console.log(_.union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

// а unionBy() делает массив уникальных объектов
/*
 * range()
 */
// быстро делает массив
// console.log(_.range(10, 51));

/*
 * sortBy()
 */

// const users = [
//   { user: "fred", age: 48 },
//   { user: "barney", age: 36 },
//   { user: "fred", age: 40 },
//   { user: "barney", age: 34 },
// ];

// console.log(_.sortBy(users, ["user", "age"]));

/*
 * sum() и sumBy()
 */

// console.log(_.sum([1, 2, 3, 4, 5]));

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// console.log(_.sumBy(players, player => player.timePlayed));

/*
 * uniq() - выбрать уникальные значения
 и uniqBy() - массив объектов
 * sortedUniq() - отсортированные уникальные
  и sortedUniqBy()
 */

/*
 * random()
 */

/*
 * min() и max()
 * minBy() и maxBy()
 */

// console.log(_.minBy(players, player => player.timePlayed));

// console.log(_.min([1, 2, 3, 4, 5]));
// вместо
// console.log(Math.min(...[1, 2, 3, 4, 5]));

/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

console.log(_.kebabCase(" a b c "));
