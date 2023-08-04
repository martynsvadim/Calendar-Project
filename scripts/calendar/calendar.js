import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { renderEvents } from '../events/events.js';
import { createNumbersArray } from '../common/createNumbersArray.js';

const generateDay = () => {
  // функция должна сгенерировать и вернуть разметку дня в виде строки
  // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
  const timeScale = document.querySelector('.calendar__time-scale');
  const timeSlot = createNumbersArray(1, 24)
    .map(
      (timeElem) =>
        `<div class = "time-slot"><span class="time-slot__time" data-time-number = ${timeElem}>${timeElem}${':00'}</span></div>`
    )
    .join('');
  timeScale.innerHTML = timeSlot;
};
generateDay();

export const renderWeek = () => {
  // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
  // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
  // массив дней, которые нужно отобразить, считаем ф-цией generateWeekRange на основе displayedWeekStart из storage
  // каждый день должен содержать в дата атрибуте порядковый номер дня в месяце
  // после того, как отрисовали всю сетку для отображаемой недели, нужно отобразить события этой недели с помощью renderEvents
  const calendarWeek = document.querySelector('.calendar__week');
  const mondayDate = getItem('displayedWeekStart');

  const week = generateWeekRange(mondayDate)
    .map(
      (elem) => `<div class="calendar__day" data-day = ${elem.getDate()}></div>`
    )
    .join('');

  calendarWeek.innerHTML = week;

  const calendarDay = document.querySelectorAll('.calendar__day');

  const dayTimeSlot = createNumbersArray(1, 24)
    .map(
      (time) => `<div class="calendar__time-slot" data-time = ${time}></div>`
    )
    .join('');

  calendarDay.forEach((dayElem) => (dayElem.innerHTML = dayTimeSlot));
};
renderWeek();
