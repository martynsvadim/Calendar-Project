import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export const renderHeader = () => {
  // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
  // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
  const calendarHeader = document.querySelector('.calendar__header');
  const monday = getItem('displayedWeekStart');

  const headerWeek = generateWeekRange(monday)
    .map(
      (elem) =>
        `<div class="calendar__day-label"><span class="day-label__day-name">${
          daysOfWeek[elem.getDay()]
        } <n> </span><span class="day-label__day-number">${elem.getDate()}</span></div>`
    )
    .join('');
  calendarHeader.innerHTML = headerWeek;
};
renderHeader();

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик
