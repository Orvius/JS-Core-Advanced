// Создайте функцию и внутри неё объявите
// переменные с использованием var, let и
// const. Попробуйте обратиться к этим
// переменным вне функции. Какие
// переменные будут видны снаружи функции,
// а какие нет?

function testVariables() {
  var varVariable = 1;
  let letVariable = 1;
  const constVariable = 1;
}

console.log(varVariable); // ReferenceError: varVariable is not defined
console.log(letVariable); // ReferenceError: letVariable is not defined
console.log(constVariable); // ReferenceError: constVariable is not defined

// Потому что область видимости переменных var, let и const, объявленных внутри функции, ограничена самой функцией
