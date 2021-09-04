/* Proxy глобальный класс в js, позволяющий создавать ловушки для объектов, функций, классов

*/

// Objects
const person = {
  name: "Maxim",
  age: 33,
  job: "frontend",
};

// Создаем переменную прокси, 1 параметр цель-target, 2 параметр handler - ловушки,
// переписывающие функционал цели, в нашем случве объекта

const op = new Proxy(person, {
  get(target, prop) {
    // console.log('Target', target)
    // console.log('Prop', prop)
    console.log(`Getting prop ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },
  has(target,prop) {
    return ['age', 'name','job'].includes(prop)
  },

  deleteProperty(target,prop) {
    console.log('Deleting... ', prop)
    delete target[prop]
    return true
  }
});

console.log(op.name);
/*
Target { name: 'Maxim', age: 33, job: 'frontend' }
Prop name
Maxim
 */


// Function

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
  apply(target,thisArg,args) {
console.log('Calling fn ...')

return target.apply(thisArg,args).toUpperCase()

  }
})

console.log(fp('test proxy'))
/*
Calling fn ...
LOG: TEST PROXY
*/


// Classes

class Person {
  constructor(name,age) {
    this.name = name,
    this.age = age
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Construct ...')

    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop ${prop}`)
        return t[prop]
      }
    }) 
  }
} )

const p = new PersonProxy('Maxim', 33)

console.log(p)

/*
Construct ...
Person { name: 'Maxim', age: 33 }
*/