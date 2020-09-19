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
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */
