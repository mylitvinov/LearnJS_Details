// const person = {
//    name: 'Maxim',
//    age: 33,
//    greet: function() {
//      console.log('Greet!!!')
//    }
// }
// console.log(person) // { name: 'Maxim', age: 33, greet: [Function: greet] }
// console.log(person.name) // Maxim
// console.log(person.age) // 33
// console.log(person.greet()) // Greet!!!

// console.log(person.toString()) //[object Object]

// __proto__ ссылка на Объект
// тоже самое, что и выше пример. Создаем переменную от класса Object

const person = new Object ({
     name: 'Maxim',
     age: 33,
     greet: function() {
       console.log('Greet!!!')
     }
  })

  /* prototype - Объект, который присутствует у родительских элементов. 
  От него создается новый экземпляр,по его шаблону с свойствами, присущими этому Объекту.
  Расширяет свойства создаваемых объектов, наследование.
  Стрелочная функция не является функцией конструтором. Только с ключевым словом function
  и class. Любой class и любая function имеют prototype. С большой буквы классы и функции
  конструкторы
  Object.prototype
  Function.prototype
  Promise.prototype
  Boolean.prototype
  Number.prototype
  String.prototype
  Array.prototype
  Component.prototype
  Каждый prototype независимый объект, самостоятельный с оперделенным набором свойств и методов
  свойство __proto__ любого объекта ссылается на prototype класса (функции конструктора)  с 
  помощью которого этот объект был создан (сконструирован.) 
  */
Object.prototype.sayHello = function () { //Создали глобально для всех объектов метод sayHello
  console.log('Hello!')
}

console.log(person.sayHello()) // Hello! 

// Создаем новый обьект от нашего обьекта person (который будет являться
// прототипом для sofia), со всеми его свойствами
const sofia = Object.create(person);

console.log(sofia.greet()) // Greet!!!
console.log(sofia.sayHello())// Hello!

sofia.name = 'Sofia';
console.log(sofia) // { name: 'Sofia' }
console.log(sofia.name) // Sofia

// Примитивы не объекты, происходит Boxing, создается временный объект
// от родительского класса (String, Number, Boolean)
const str = 'I am string'; // эквивалентно const str = new String('I am string')

console.log (str.sayHello()); // Hello, ранее создали метод sayHello. По прототипам нашло его