

function calcValues(a,b) {
  return [
    a + b,
    a - b,
    a * b,
    a / b
  ]
}

// const result = calcValues( 42,10)
// const sum = result[0]
// const sub = result[1]
// const[sum,sub] = result

const [sum,sub] = calcValues(42,10)
console.log(sum,sub) // 52,32

// object

const person = {
  name: 'Max',
  age: 33,
  address: {
    country: 'Russia',
    city: 'Spb'
  }
}

const {
  name: firstName, // присваиваем значение новой переменой
  age,
  car = 'Машины нет', // По умолчанию значение
  address: {city:homeTown,country} // вложенные объекты
} = person
console.log(firstName,age)// Max 33


const {name, ...info} = person
console.log(info) // { age: 33, address: { country: 'Russia', city: 'Spb' } }


function logPerson({name:fName = 'Default', age}) {
  console.log(fName + ' ' + age)
}

logPerson(person) // Max 33