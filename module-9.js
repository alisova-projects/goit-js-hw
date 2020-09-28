// /*
//  * Сhatty events - приём оптимизации болтливых событий
//  * Приемы throttling и debouncing c Lodash
//  */

// /*
//  * Mousemove и throttle - юзаем только там, где что-то скролим, делаем ресайзб изменяем размер нашего окнаб делаем дрейги(перетаскивания): отслеживать позицию перетаскиваемого э-та раз в 100 милисекунд
//  */
// const coordsOutputRef = document.querySelector(".js-coords");
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener("mousemove", _.throttle(onMouseMove, 250));

// function onMouseMove(event) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputRef.textContent = `
//     Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${event.clientX},
//     Y:${event.clientY}
//   `;
// }

// /*
//  * Input и debounce - юзаем, когда надо подождать, когда закончится поток событий и потом что-то сделать. Например, ввод при поиске (инпут).
//  */
// const inputRef = document.querySelector(".js-input");
// const outputRef = document.querySelector(".js-output");
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener("input", _.debounce(onInputChange, 300));

// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//     Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
//     Значение: ${event.target.value}
//   `;
// }

// ******************************************************************

// Фильтр массива эл-тов

// const tech = [
//   { label: "HTML" },
//   { label: "CSS" },
//   { label: "JavaScript" },
//   { label: "Node.js" },
//   { label: "React" },
//   { label: "Vue" },
//   { label: "Next.js" },
//   { label: "Mobx" },
//   { label: "Redux" },
//   { label: "React Router" },
//   { label: "GraphQl" },
//   { label: "PostgreSQL" },
//   { label: "MongoDB" },
// ];

// /*
//  * 1. Рендерим разметку элементов списка
//  * 2. Слушаем изменение фильтра
//  * 3. Фильтруем данные и рендерим новые элементы
//  */

// const refs = {
//   list: document.querySelector(".js-list"),
//   input: document.querySelector("#filter"),
// };

// refs.input.addEventListener("input", _.debounce(onFilterChange, 300));

// const listItemsMarkup = createListItemsMarkup(tech);

// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map((item) => `<li>${item.label}</li>`).join("");
// }

// function onFilterChange(evt) {
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter((t) =>
//     t.label.toLowerCase().includes(filter)
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// // мы уже большие - 8 недель
// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }

// fuzzy search - пушистый поиск (Fuse.js) - даже с ошибками будет искать похожие слова (fusejs.io - библиотека)

// ******************************************************************

/*
 * Ленивая загрузка изображений (концепция) - изображение будет загружать тогда, когда необходимо (за некоторое время до того, как пользователь её увидит)
 * - нативная поддержка - lazy loading
 * - событие загрузки изображения - 'load'
 */

/*
 Если изо не адаптивные, то нужно в разметке по умолчанию указывать высоту и ширину.
 Если адаптивные, то будут src-сеты и дескриптор 'w' (браузер тоже будет знать, сколько кратинка будет занимать).
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log("Картинка загрузилась");
  evt.target.classList.add("appear");
}

// ***********************************************************************
