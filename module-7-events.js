// события:
// drag;
// scroll;
// click;
// keybord;

// pubSub - publisher/subscriber - издатель(браузер)/подписчики(мы)

// ************************************************************

/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей (именование обработчиков событий)
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события - event - объект, который содержит информацию о событии, которое произошло
 */

// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");

// targetBtn.addEventListener("click", onTargetButtonClick);

// function handleTargetButtonClick() { // обработать клик на таргет баттон
//   console.log("Клик");
// }

// или аналог, но другое наименование:

// function targetButtonClickHandler() {
//   // обработчик клика по таргет баттону
//   console.log("Клик");
// }

// или

// function onTargetButtonClick() {
//   console.log("Клик");
// }

// ---------------------------------------------------

// addListenerBtn.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("Вешаю слушателя события на целевую кнопку");

//   targetBtn.addEventListener("click", onTargerBtnClick);
// });

// removeListenerBtn.addEventListener("click", (event) => {
//   console.log(event); // объект события
//   console.log("Снимаю слушателя события с целевой кнопки");

//   targetBtn.removeEventListener("click", onTargerBtnClick);
// });

// function onTargerBtnClick(event) {
//   console.log(event); // объект события
//   console.log("Клик по целевой кнопке");
// } // там, где нужно будет отписаться от слушателя события, колбек нужно сохранять во внешнюю функцию

// function logMessage() {
//   console.log("Клик по целевой кнопке");
// }

// *******************************************************************

/*
 * - Событие submit (событие формы, а не её эл-та)
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// пригодится при работе с серверами

// const form = document.querySelector(".js-register-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault(); // отмена действий по умолчанию - тут перезагрузки страницы

//   //   console.dir(event.currentTarget.elements.subscription.value); // текущая цель - ссылается на тот эл-т, который прослушивает это событие.
//   // //   т.е.наша форма подписалась на сабмит, поэтому во время этого сабмита будет ссылка на эту форму

//   // ------------------------------------------------------
//   //   const formElements = event.currentTarget.elements;

//   //   console.dir(formElements);

//   //   const mail = formElements.email.value;
//   //   const password = formElements.password.value;
//   //   const subscription = formElements.subscription.value;

//   //   const formData = {
//   //     mail,
//   //     password,
//   //     subscription,
//   //   };

//   //     console.log(formData); // лучше так -->
//   // ----------------------------------------

//   const formData = new FormData(event.currentTarget); // делаем новый экземпляр из класса ФормДата, на который кинем ссылку на целую форму -->
//   console.log(formData); // ФормаДата - наш лучший помощьник при сборе данных из большой формы
//   // нам вернули данные, которые можно посмотреть через forEach -->
//   formData.forEach((value, name) => {
//     console.log("name ", name);
//     console.log("value ", value);
//   });
// }

// **************************************************************

/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur(при потере фокуса - размытие)
 * - input(используется с текстовыми полями) и change (используется с checkbox и radio-button)
 * - Чекбоксы и свойство checked
 */

// const refs = {
//   input: document.querySelector(".js-input"),
//   nameLabel: document.querySelector(".js-button > span"),
//   licenseCheckbox: document.querySelector(".js-license"),
//   btn: document.querySelector(".js-button"),
// };

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// refs.input.addEventListener("change", onLicenseChange); // - не юзать для текста

// refs.input.addEventListener("input", onInputChange); // слушает каждое измененеие внутри инпута - посимвольно/побуквенно
// // именно инпут использовать для инпутов и тектстовых полей (в домашке)

// refs.input.addEventListener("input", onInputChange);
// refs.licenseCheckbox.addEventListener("change", onLicenseChange);

// function onInputFocus() {
//   console.log("Инпут получил фокус - событие focus");
// }

// function onInputBlur() {
//   console.log("Инпут потерял фокус - событие blur");
// }

// function onInputChange(event) {
//   console.log(event.currentTarget.value); // - получаем значение, которое вводим в инпут при каждом вводе
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   // обработчик событий
//   //   console.log(event.currentTarget.checked);
//   //   console.log("refs.btn.disabled: ", refs.btn.disabled);

//   refs.btn.disabled = !event.currentTarget.checked;
// }

// currentTarget - эл-т на котором было словлено наше событие 'change',
// и на нём можно юзать value
// (но на инпутах мы его юзать не будемб только на инпутах и радио-батонахб и ещё всякой мелочи: на дропдаунахб селекторах...)

// value есть у инпутов
// checked - только у чекбоксов и радио-баттонов
// св-во textContent - только у тектовых полейб абзацевб спанов и т.д.

// **************************************************************

/*
 * Типы событий: keypress (реагирует на клавиши, которые генерят какой-то символ, но не реагирует на служебные клавиши), 
 keydown(реагирует на все клавиши, включая служебные), 
 keyup (реагирует на все клавиши, включая служебные)
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key(хранит символ введённый с клавиатуры) и KeyboardEvent.code (хранит физическую клавишу - номер или местоположение на клавиатуре в стандартной раскладке)
 */

// const refs = {
//   output: document.querySelector(".js-output"),
//   clearBtn: document.querySelector(".js-clear"),
// };

// window.addEventListener("keydown", onKeypress);
// refs.clearBtn.addEventListener("click", onClearOutput);

// function onKeypress(event) {
//   console.log(event);
//   console.log("event.key: ", event.key); // выводит символ-клавишу на том языке, который сейчас активен
//   console.log("event.code: ", event.code); // выводит физическую клавишу на клавиатуре

//   refs.output.textContent += event.key;
// }

// function onClearOutput() {
//   refs.output.textContent = "";
// }

// *******************************************************

/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout (убирается ховер, если мышка перемещается на детей и не находится над самим эл-том)
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

// const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mouseover", onMouseEnter);
// boxRef.addEventListener("mouseout", onMouseLeave);
// // boxRef.addEventListener('mousemove', onMouseMove); // срабатывает на каждое движение мышки (на каждый пиксель/субпиксель)

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add("box--active");
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove("box--active");
// }

// function onMouseMove(event) {
//   console.log(event);
// }

// ****************************************************************

/*
 * 1. Открыть и закрыть по кнопке onModalOpen и onModalClose
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackDropClick);

function onOpenModal() {
  window.addEventListener("keydown", onEscapeKeypress);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscapeKeypress);
  document.body.classList.remove("show-modal");
}

function onBackDropClick(event) {
  console.log("Клик по backdrop");

  console.log(event.currentTarget); // текущий эл-т - это где висит eventListener
  console.log(event.target); // целевой эл-т, на котором произошёл клик - куда мы в интерфейсе жмакнули(где это событие родилось)

  if (event.currentTarget === event.target) {
    console.log("Кликнули именно по бекдроп");
    onCloseModal();
  }
}

function onEscapeKeypress(event) {
  //   console.log(event);
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
