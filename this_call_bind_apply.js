function hello() {
  console.log("Hello", this);
}

console.log(hello()); // Hello  Object [global] {..}

const person = {
  name: "Maxim",
  age: 33,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

// console.log(person); // { name: 'Maxim', age: 33, sayHello: [Function: hello] }
// console.log(person.sayHello()); //Hello { name: 'Maxim', age: 33, sayHello: [Function: hello] }
// console.log(person.sayHelloWindow());
// this указывает объект в контексте которого было вызывано, объект слева от this от точки.

person.logInfo();
// Name is Maxim
// Age is 33

const sofia = {
  name: "Sofia",
  age: 3,
};

console.log(person.logInfo.bind(sofia)());
//Name is Sofia
// Age is 3
// bind метод у функции, который привязывает необходимый контекст какого то объекта

const fnSofiaInfoLog = person.logInfo.bind(sofia, "Frontend", "3134141242"); // bind надо вызывать, когда необходимо
// первый параметр контекст, через запятую можно доп. параметры или:
// fnSofiaInfoLog('Frontend', '3134141242')

person.logInfo.call(sofia, "Frontend", "3134141242"); // call сразу вызывает функцию, любое кол-во параметров

person.logInfo.apply(sofia, ["Frontend", "3134141242"]); // только два параметра. Контекст и массив параметров

//+++++++++++++++++++++
const array = [1, 2, 3, 4, 5];

// function multBy(arr,n) {
//   return arr.map(i =>  i*n )
//   }

// console.log(multBy(array, 3)); // [ 3, 6, 9, 12, 15 ]

Array.prototype.multBy = function (n) {
  return this.map((i) => i * n);
};

console.log(array.multBy(10)) // [ 10, 20, 30, 40, 50 ]