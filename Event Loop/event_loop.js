// Используя Promise, выведите числа от 1 до
// 10 через секунду каждый раз.
// Ограничения: setTimeout и new Promise() мы
// можно вызывать только один раз.

function delayedOutput(number) {
    return new Promise(function(resolve) {
      setTimeout(() => resolve(number), 1000);
    });
  }
  
  async function printNumbers() {
    for (let i = 1; i <= 10; i++) {
      let number = await delayedOutput(i);
      console.log(number);
    }
  }
  
  printNumbers();