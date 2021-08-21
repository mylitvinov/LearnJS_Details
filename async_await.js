/*
Создаем функцию, возвращающую  Промис с параметром resolve (r), через заданное количество мс (ms параметр).
*/
const delay = (ms) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(), ms;
    });
  });
};

// delay(2000)
// .then(() => console.log('from 2 sec'))

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchTodos() {
//   console.log('Fetch todo started...')
//   return delay(2000)
//   .then(() => {
//    return fetch(url)
//    }).then(response => response.json())
// }

// fetchTodos ()
// .then(data => {
//   console.log('Data:', data)
// })
// .catch(e => console.error(e))

async function fetchAsyncTodos() {
  console.log("Fetch todo started...");
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data:", data);
  } catch (e) {
    console.log(e);
  } finally{
    console.log('Появлюсь в любом случае')
  }
}

fetchAsyncTodos();

// await оператор ждет и обрабатывает Промис. Получаем в переменную для дальнейших действий.
// Необходимо у родит-й функции использовать оператор async