
const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url,body = null) {
  // метод fetch() возвращает Промис

  const headers = {
    'Content-Type' : 'application/json'
  }

 return fetch(url,{
   method: method,
   body: JSON.stringify(body),
   headers: headers
 }).then(response =>{
   if(response.status){
        return response.json()
   }
   return response.json().then(error => {
     const e = new Error ('Что-то пошло не так')
     e.data = error
     throw e
   })
 })
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
