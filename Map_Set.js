// map

const obj = {
  name: "Maxim",
  age: 33,
  job: "Frontend",
};

const entries = [
  ["name", "Maxim"],
  ["age", 33],
  ["job", "Frontend"],
];

// console.log(Object.entries(obj))
// [ [ 'name', 'Maxim' ], [ 'age', 33 ], [ 'job', 'Frontend' ] ]

// console.log(Object.fromEntries(entries))
// { name: 'Maxim', age: 33, job: 'Frontend' }

const map = new Map(entries);
//console.log(map) // Map(3) { 'name' => 'Maxim', 'age' => 33, 'job' => 'Frontend' }
//console.log(map.get('job')) // Frontend

map
.set("newField", 42)
.set(obj, "Value of Object")
.set(NaN, 'NaN ??');

// console.log(map);
/*
Map(5) {
  'name' => 'Maxim',
  'age' => 33,
  'job' => 'Frontend',
  'newField' => 42,
  { name: 'Maxim', age: 33, job: 'Frontend' } => 'Value of Object'    
}
*/

// в Map ключами могут являться любые типыданных, в т.ч. объкты

// map.delete('job')

// console.log(map.has('job')) // false

//============================

// for (const entry of map.entries()) {
//   console.log(entry)
  
// }
// или

// for (const [key,value] of map) {
//   console.log(key, value)
// }

// for (const val of map.values()) {
//   console.log(val)
// }

// for (const key of map.keys()) {
//   console.log(key)
// }

//==============================

// const array = [...map]
// console.log(map)

/*
Map(6) {
  'name' => 'Maxim',
  'age' => 33,
  'job' => 'Frontend',
  'newField' => 42,
  { name: 'Maxim', age: 33, job: 'Frontend' } => 'Value of Object',   
  NaN => 'NaN ??'
}
*/


//=========================
// set

const set = new Set([1,2,3,3,3,4,5,6,6])
// console.log(set) // { 1, 2, 3, 4, 5, 6 } каждое значение уникальное
set.add(10).add(20).add(20)
// set структура данных с одинаковыми значениями key и value

function uniqValues(array) {
  return [...new Set(array)] // Array.from(new Set(array))

}

console.log(uniqValues([1,1,2,2,4,4,4,4,5,5,5,6,6,7,7,7]))
// [ 1, 2, 4, 5, 6, 7 ]

