/* Генераторы -  функции, которые выдают последовательно результат ее работы
спец. слово yield в теле функции, для последоват. вывода
next спец. метод
*/

function* strGenerator() {
  yield 'H'
  yield 'e'
  yield 'l'
  yield 'l'
  yield 'o'
}

const str = strGenerator()

console.log(str.next()) // { value: 'H', done: false }
console.log(str.next()) // { value: 'e', done: false }

// { value: undefined, done: true } финальный вызов



