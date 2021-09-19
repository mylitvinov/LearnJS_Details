const citiesRussia = ['Москва', 'Санкт-Петербург','Астрахань','Омск']
const citiesEurope = ['Лондон', 'Париж','Прага']

const citiesRussiaWithPopulation = {
  Moscow: 12,
  SaintPetersburg: 6,
  Astrakhan: 1,
  Omsk: 2
};

const citiesEuropeWithPopulation = {
  London: 5,
  Paris: 4,
  Praga: 3
}

/* Spread разворачивает массив с которым работает, три точки
*/

// console.log(...citiesRussia) // строка:  Москва Санкт-Петербург Астрахань Омск

const allCities = [...citiesRussia, ...citiesEurope] // объединяем массивы

// ранее с помощью метода concat:  const allCities = citiesRussia.concat(citiesEurope)

// console.log(allCities) 
/*[
  'Москва',
  'Санкт-Петербург',
  'Астрахань',
  'Омск',
  'Лондон',
  'Париж',
  'Прага'
] */


// Клонирование объектов с помощью spread

const clone = {...citiesRussiaWithPopulation}

// console.log(clone) // { Moscow: 12, SaintPetersburg: 6, Astrakhan: 1, Omsk: 2 }

// Объединение объектов

const allObj = {...citiesRussiaWithPopulation,...citiesEuropeWithPopulation}
// console.log(allObj)
/*
{
  Moscow: 12,
  SaintPetersburg: 6,
  Astrakhan: 1,
  Omsk: 2,
  London: 5,
  Paris: 4,
  Praga: 3
}
*/

// Поиск максимального числа в массиве

const numbers = [2,16,33,23,44,99]

const maxNum = Math.max(...numbers) // Math.max принимает строку, через запятую параметры 2,16,33,23,44,99
// console.log(maxNum) // 99

// ранее как искали макс. значение
// const maxNum = Math.max.apply(null,numbers)


// доступ до элементов DOM

//const divs = document.querySelectorAll('div') //NodeList коллекция дом элементов

//const nodes = [...divs] // получаем массив с помощью spread

// Rest

function sum (a,b, ...rest) {
  //console.log(rest) // [ 3, 4, 5, 6 ]
  return a + b + rest.reduce((sum,num)=> sum + num, 0)
}

const nums = [1,2,3,4,5,6]
console.log(sum(...nums)) // 21

// Деструктуризация

const [a,b,...other] = nums
console.log(a,b,other) // 1 2 [ 3, 4, 5, 6 ]


const person = {
  name: 'Max',
  age: 33,
  city: 'SaintPetersburg',
  country: 'Russia'
}

const {name,age, ... address} = person
console.log( name,age,address) // Max 33 { city: 'SaintPetersburg', country: 'Russia' }
