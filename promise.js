console.log("Request data ...");

// setTimeout(() => {
//   console.log("Preparing data...");
//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data received', backendData)
//   }, 2000);
// }, 2000);

/* Request data ...
Preparing data...
Data received { server: 'aws', port: 2000, status: 'working', modified: true }

При данном подходе главный минус - вложенность, чем больше асинхронных операций, тем больше
будет вложенностей, колбеков внутри колбеков. Появились Промисы, для упрощения работы с 
асинхронными операциями.
*/

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");
//       const backendData = {
//         server: "aws",
//         port: 2000,
//         status: "working"
//       }
//       resolve()
//   }, 2000)
// });

// p.then( () => {
//   console.log ('Promise resolved')
// })

/* 
Request data ...
Preparing data...
Promise resolved

resolve функция вызывается, когда закончена успешно асинхронная операция
У созданных промисов есть свои методы, один из них then()

*/

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   });

//   p2.then((clientData) => {
//     console.log("Data received", clientData);
//   });
// });

 /*
Request data ...
Preparing data...
Data received { server: 'aws', port: 2000, status: 'working', modified: true }
ИЛИ:
*/

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data); //reject(data) если операция неуспешная
//     }, 2000);
//   });
// })

//   .then((clientData) => {
//     console.log("Data received", clientData);
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then((data) => {
//     console.log("Modified", data);
//   })
//   .catch((err) => console.log("Error", err))
//   .finally(() => console.log("Finally always print"));

/*
По цепочки then, делаем возвраты в кажом методе then

Request data ...
Preparing data...
Data received { server: 'aws', port: 2000, status: 'working', modified: true }
Modified {
  server: 'aws',
  port: 2000,
  status: 'working',
  modified: true,
  fromPromise: true

метод catch() отслеживает ошибки

метод finally() вызывается в любом случае
*/

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

// After 2 sec
// After 3 sec

/*
У глобального объекта Промис есть метод all принимающий в себя массив промисов
then выполняется только тогда, когда завершаться все прмисы с массива

Также есть метод race, срабатывает, после первого промиса в массиве
*/

Promise.all([sleep(2000), sleep(5000)])
.then(()=> console.log('All promises')) // Через 5 sec

Promise.race([sleep(2000), sleep(5000)])
.then(()=> console.log('Race promises')) // через 2 сек