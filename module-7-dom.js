// const magicBtn = document.querySelector(".js-magic-btn");

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

// const navEl = document.querySelector(".site-nav"); // возвращает один эл-т или null (это важно!), используется для одного уникального эл-та или первого совпадения
// console.log("navEl", navEl);

// const navLinksEl = document.querySelectorAll(".site-nav__link"); // возвращает коллекцию или пустой массив
// console.log("navLinksEl", navLinksEl);

/*
 * Document.querySelector* и Element.querySelector*
 */

//  **************************************************************************

// const magicBtn = document.querySelector(".js-magic-btn");

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const imageEl = document.querySelector(".hero__image");
// // console.log('imageEl', imageEl);
// imageEl.src =
//   "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";
// imageEl.alt = "Это новый котик";

// const heroTitleEl = document.querySelector(".hero__title");
// // console.log('heroTitleEl', heroTitleEl);
// heroTitleEl.textContent = "Я сладкий пирожочек!";

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибуты
 */
// const actions = document.querySelectorAll(".js-actions button");
// console.log(actions);
// console.log(actions[2].dataset.action);

// *************************************************************************

// const magicBtn = document.querySelector(".js-magic-btn");
/*
 * Интерфейс classList - есть у каждого эл-та - просто свойство, в котором хранится объект, у которого в прототипе всякие прикольные методы
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

// classList работает только с классами

// const navEl = document.querySelector(".site-nav");
//   console.log(nav.classList);
//   navEl.classList.add("super-cool, qweqwe");
// navEl.classList.remove("qweqwe");
// navEl.classList.replace("site-nav"); // заменить

// console.log(navEl.classList.contains("qweqwe")); // возвращает true или false

// magicBtn.addEventListener("click", () => {
//  navEl.classList.toggle('qwerty'); // добавляет/убирает - делает 2 действия
// });

// const currentPageUrl = "/contact";

// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`
// );
// //это тоже, что и:
// // .site - nav__link[href = "/contact"]

// console.log(linkEl);
// linkEl.classList.add("site-nav__link--current");

// ************************************************************************

/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

// const navEl = document.querySelector(".site-nav");

// // const firstNavItemEl = navEl.querySelector('.site-nav__item');
// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);
// console.log(navEl.children);
// console.log(navEl.lastElementChild);

// ***************************************************************************

/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */
// const titleEl = document.createElement("h1");
// titleEl.classList.add("page-title");
// titleEl.textContent = "Это заголовок страницы :)";
// console.log(titleEl);

// document.body.appendChild(titleEl);

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
// const imageEl = document.createElement("img");
// imageEl.src =
//   "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
// imageEl.alt = "valais-alpine-mountains-glacier";
// imageEl.width = 320;
// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

// const heroEl = document.querySelector(".hero");
// // heroEl.appendChild(titleEl);
// // heroEl.appendChild(imageEl);
// heroEl.append(titleEl, imageEl);

/*
 * Создаём и добавляем новый пункт меню
 */
// const navItemEl = document.createElement("li");
// navItemEl.classList.add("site-nav__item");

// const navLinkEl = document.createElement("a");
// navLinkEl.classList.add("site-nav__link");
// navLinkEl.textContent = "Личный кабинет";
// navLinkEl.href = "/profile";

// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

// const navEl = document.querySelector(".site-nav");

// // navEl.appendChild(navItemEl);
// navEl.insertBefore(navItemEl, navEl.firstElementChild);

// *******************************************************************

/*
 * Создём и добавляем коллекцию
 */
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const colorPickerContainerEl = document.querySelector(".js-color-picker");

// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// console.log(elements);

// colorPickerContainerEl.append(...elements);

/*
 * Пишем функцию для создания разметки колорпикера
 */
// const makeColorPickerOptions = (options) => {
//   return options.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.classList.add("color-picker__option");
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

// ***************************************************************

import products from "./data/products.js";

// console.log(products);

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
}

/*
 * Пишем функцию для создания карточки продукта
 */

// const productsContainerEl = document.querySelector(".js-products");

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement("article");
//   productEl.classList.add("product");

//   const nameEl = document.createElement("h2");
//   nameEl.textContent = name;
//   nameEl.classList.add("product__name");

//   const descrEl = document.createElement("p");
//   descrEl.textContent = description;
//   descrEl.classList.add("product__descr");

//   const priceEl = document.createElement("p");
//   priceEl.textContent = `Цена: ${price} кредитов`;
//   priceEl.classList.add("product__price");

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// const elements = products.map(makeProductCard);

// console.log(elements);
// productsContainerEl.append(...elements);

// ****************************************************************

/*
 * Свойство innerHTML (использовать в случае, если нужно очистить тег или записать в тег что-то, не изменяя старое)
 * - чтение
 * - запись
 */

// const titleEl = document.querySelector(".title");

// console.log(titleEl.textContent);
// или можно применить:
// console.log(titleEl.innerHTML); // показывает даже вложенные теги типа <span>

// так же можно перезаписать текст внутри заголовка
// titleEl.innerHTML = '<a href="">Это ссылка)</a>'; // если передать теги в строке, то парсер будет создавать эти теги
// titleEl.innerHTML += '<a href="">Это ссылка)</a>'; // никогда не делать "+="
// titleEl.innerHTML = ''; // очень просто очищает контент тега

/*
 * Вставка разметки с insertAdjacentHTML() - это операция не деструктивная
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

// titleEl.insertAdjacentHTML(
//   "beforeend",
//   '<a href="" class="title__link">Это ссылка)</a>'
// );

// ****************************************************************

import transactionHistory from "./data/transactions.js";

// makeTransactionTableRowEl - когда EL(element)б то понятно, что работа с узлом(эл-том)
// makeTransactionTableRowMarkup - когда MARKUP, то это работа со строкой

const makeTransactionTableRowMarkup = (transaction) => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

console.log(transactionHistory);
const tableEl = document.querySelector(".js-transaction-table");
const transactionTableRowsMarkup = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join("");

tableEl.insertAdjacentHTML("beforeend", transactionTableRowsMarkup);

console.log(transactionTableRowsMarkup);
