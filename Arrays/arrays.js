// Напишите функцию, которая принимает
// массив с числами и находит сумму тех
// элементов этого массива, которые больше
// нуля и меньше десяти.

function sumInRange(array) {
  return array.reduce(
    (acc, item) => (item > 0 && item < 10 ? item + acc : acc),
    0
  );
}

sumInRange([0, 10, 12, 3, 1, -3, -6, 9]);
