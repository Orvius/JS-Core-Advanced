// Напишите функцию, которая принимает
// массив и возвращает true, если в массиве
// есть дубликаты, и false, если нет.
// Используйте строгий режим.

"use strict";

function checkForDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

checkForDuplicates([1, 2, 2, 4]);
checkForDuplicates([1, 2, 3, 4]);
