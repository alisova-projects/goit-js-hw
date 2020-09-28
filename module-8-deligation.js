/*
Capture-Target-Bubbling Phase
event.target - целевой эл-т, на котором произошло событие
EventTarget.currentTarget - эл-т, на котором стоит слушатель событий
*/

// Делегирование событий.Применяется, когда есть коллекция однотипных событий.

/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

/*
-во nodeName - есть у каждого эл-та(в браузере отражается большими буквами)
 паттерн guard clause - если нет, то уходим: разглаживает код - логика от противного.
*/

// const container = document.querySelector(".js-container");

// container.addEventListener("click", onClick);

// function onClick(evt) {
//   //   console.log(evt.target);
//   //   console.log(evt.target.textContent);

//   if (evt.target.nodeName !== "BUTTON") {
//     // guard clause - фильтр цели клика/делигации. можно фильтровать по классу: event.target.classList.has('имя класса')
//     return;
//   }
// }

/*
 * Код добавления кнопок
 */
// const addBtn = document.querySelector(".js-add-btn");
// let labelCounter = 6;

// addBtn.addEventListener("click", onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement("button");
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = "button";

//   container.appendChild(btn);
//   labelCounter += 1;
// }

// ***************************************************************

/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

//  e, evt, event - событие

// const tagsContainer = document.querySelector(".js-tags");
// let selectedTag = null;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const currentActiveBtn = document.querySelector(".tags__btn--active");
//   console.log(currentActiveBtn);

//   //   if (currentActiveBtn) {
//   //     currentActiveBtn.classList.remove("tags__btn--active");
//   //   }
//   // при каждом клике ищем текущий активный. Если такой текущий активный есть, мы снимаем с него класс, а куда клацнули - этот класс добавили.

//   // "?" - оператор не обязательного св-ва, заменяет if(только при доступе к св-ву).
//   currentActiveBtn?.classList.remove("tags__btn--active"); // - если слева от ? не null и не undefined(т.е. объект), то у него попытается взять св-во classList

//   //   console.log(evt.target); // куда клацнул, эл-т в самом пикселе экрана
//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add("tags__btn--active");

//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

//------------------------------------------------------
// про '?':
// const settings = {
//   theme: {
//     userDefined: {
//       color: "qweqwe",
//     },
//   },
// };
// console.log(settings?.theme?.userDefined?.color);
// // вместо:
// if (settings && settings.theme && settings.theme.userDefined) {
//   console.log(settings.theme.userDefined.color);
// }

// ------------------------------------------------------

/*
- выбираем несколько тегов
*/

// const tagsContainer = document.querySelector(".js-tags");
// // const selectedTags = [];
// const selectedTags = new Set(); // Set это набор уникальных эл-тов

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains("tags__btn--active");

//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle("tags__btn--active");

//   //   selectedTags.push(evt.target.dataset.value);
//   //     console.log(selectedTags);

//   console.log(selectedTags);
// }

/*
отступление:
- тернарный оператор используется только при присвоении или возврата(что тоже является операцией присвоения), вызывать функции тернарником нельзя!!!
- тернарник - для записи значения по условию, а не для вызова функции по условию.
*/

// ********************************************************

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
  { hex: "#3f51b5", rgb: "63,81,181" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#00bcd4", rgb: "0,188,212" },
  { hex: "#009688", rgb: "0,150,136" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
  { hex: "#ff9800", rgb: "255,152,0" },
  { hex: "#795548", rgb: "121,85,72" },
  { hex: "#607d8b", rgb: "96,125,139" },
];

const paletteContainer = document.querySelector(".js-palette");
const cardMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML("beforeend", cardMarkup);

paletteContainer.addEventListener("click", onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
      <div class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
      ></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
    })
    .join("");
}

function onPaletteContainerClick(evt) {
  const isColorSwatch = evt.target.classList.contains("color-swatch");
  if (!isColorSwatch) {
    return;
  }

  const currentActiveCard = document.querySelector(".color-card.is-active");
  if (currentActiveCard) {
    currentActiveCard.classList.remove("is-active");
  }

  const swatchEl = evt.target;
  // const parentColorCard = swathEl.parentNode; // плохая идея
  const parentColorCard = swatchEl.closest(".color-card");
  // closest - ближайший наверх эл-т с таким селектором
  // swatchEl.querySelector() - это поиск вглубь

  console.log(parentColorCard);

  parentColorCard.classList.add("is-active");

  // console.log(evt.target.dataset.hex);

  document.body.style.backgroundColor = swatchEl.dataset.hex;
}
