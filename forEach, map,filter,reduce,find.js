const people = [
  { name: "Maxim", age: 33, budget: 50000 },
  { name: "Sofia", age: 3, budget: 1000 },
  { name: "Anna", age: 26, budget: 30000 },
  { name: "Polina", age: 25, budget: 40000 },
  { name: "Andrey", age: 18, budget: 10000 },
  { name: "Sem", age: 7, budget: 500 },
];

// forEach
const peopleForEach = people.forEach((person, index, peopArr) => {
  // console.log(person)
  // console.log(index)
  // console.log(peopArr)
});

// console.log(peopleForEach)
//map
const peopleMap = people.map((person) => {
  return person.name;
});

// console.log(peopleMap)

//filter
const adults = people.filter(person => person.age >= 18);
// const adults = people.filter((person) => {
//   if (person.age >= 18) {
//     return true;
//   }
// });

// console.log(adults);

//reduce
let resBudget = people.reduce((acc,person) => acc+person.budget,0)
// console.log(resBudget) //131500

//find
const Polina = people.find(person => person.name === 'Polina')
console.log(Polina) // { name: 'Polina', age: 25, budget: 40000 }


//findIndex
const PolinaIndex = people.findIndex(person => person.name === 'Polina')
console.log(PolinaIndex) // { name: 'Polina', age: 25, budget: 40000 } //3
