export const createNumbersArray = (from, to) => {
  let arr = [];
  // ф-ция должна генерировать массив чисел от from до to
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
};
