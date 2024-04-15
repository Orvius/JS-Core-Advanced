// Напишите функцию, которая принимает
// массив в качестве параметра и выдает
// пользовательскую ошибку, если массив пуст.

function checkEmptyArray(arr) {
  if (arr.length === 0) {
    throw new Error("Массив пуст!");
  }
}

try {
  const myArray = [];
  checkEmptyArray(myArray);
  console.log("Массив не пустой.");
} catch (error) {
  console.error(error.message);
}
