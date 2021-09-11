// XHR

const requestURL = "https://jsonplaceholder.typicode.com/users";

// const xhr = new XMLHttpRequest()

// // открывает новое соединение с сервером, методом open()
// // метод GET
// xhr.open('GET', requestURL)
// xhr.responseType = 'json'

/*xhr.onload = () => {
   console.log(JSON.parse(xhr.response))
 }
*/

// или
// xhr.onload = () => {
//   if(xhr.status >=400) {
//     console.error(xhr.response)
//   } else {
//     console.log(xhr.response)
//   }
// }

// xhr.onerror = () => {
//   console.log(xhr.response)
// }

// //отправляем запрос на сервер
// xhr.send()

// Более универсальный способ, разные парметры, в т.ч. методом POST

function sendRequest(method, url,body = null) {
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();

    // открывает новое соединение с сервером, методом open()
    // метод GET
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json')

    /*xhr.onload = () => {
   console.log(JSON.parse(xhr.response))
 }
*/

    // или
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    //отправляем запрос на сервер 
    xhr.send(JSON.stringify(body)); // объект параметр, переводим в строку
  });
}

// sendRequest('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

const body = {
  name: 'Maxim',
  age: 33
}

sendRequest('POST', requestURL, body )
.then(data => console.log(data))
.catch(err => console.log(err))
