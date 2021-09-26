// Функция внутри другой функции, которая имеет доступ к переменным родит. функции
// при вызове этой функции

const createCalcFunction = (n) => {

  return () => {
     console.log(1000*n) // переменная n замыкается внутри функции
  }
  
}

const calc = createCalcFunction(5); // получаем функцию
console.log(calc) // [Function (anonymous)], ф-я, к-я return в createCalcFunction
calc(); // 5000 // вызвали эту функцию с параметром n из области видимсоти createCalcFunction 


const createIncrementor = (n) => {
  return (num) => {
    return n + num
  }
}


const addOne = createIncrementor(1);

console.log(addOne(10)); // 11

const urlGenerator = (domain) => {
  return (url) => {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com')

console.log(comUrl('google'))


// Напишем свою функцию bind

const user1 = {name: 'Maxim', age: 33, job: 'Frontend'}
const user2 = {name: 'Nataly', age: 32, job: 'Manager'}

function logPerson () {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job} `)
}

// logPerson.bind(user1)() // Person: Maxim, 33, Frontend

function bind (context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

bind(user1,logPerson)() // Person: Maxim, 33, Frontend