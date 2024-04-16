// Напишите функцию, которая конвертирует
// функцию, основанную на callbacks, в
// функцию, основанную на Promises.

function callbackToPromise(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

// Пример
function asyncFunctionWithCallback(input, callback) {
  setTimeout(() => {
    if (input === "success") {
      callback(null, "Успех");
    } else {
      callback(new Error("Ошибка"));
    }
  }, 1000);
}

const asyncFunctionWithPromise = callbackToPromise(asyncFunctionWithCallback);

asyncFunctionWithPromise("success")
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
