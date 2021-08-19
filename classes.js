// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true
// }

class Animal {

static type = 'ANIMAL' // если переменная или метод статические, то доступны только внутри этого класса

  constructor(options) {            // Конструктор - метод с параметрами в виде объекта
    this.name = options.name,
    this.age = options.age,
    this.hasTail = options.hasTail
  }

  voice() {
    console.log('I am animal')
  }
}

// const animal = new Animal ({  // способ создания нового объекта от класса, с помощью ключевого слова new
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// })

class Cat extends Animal {
  static type = 'CAT'

  constructor (options) {
    super (options)  // вызываем сначала родительский конструктор Animal
    this.color = options.color
  }

  voice() {
    super.voice()
    console.log( 'I am cat')
  }

  get ageInfo () {
    return this.age * 7
  }

  set ageInfo (newAge) {
    this.age = newAge
  }

}

const cat = new Cat ({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black'
})

class Component {
  constructor(selector) {
    this.$el = document.querySelector (selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }
  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Component {
  constructor (options) {
super(options.selector)

this.$el.style.width = this.$el.style.height = options.sixe + 'px'
this.$el.style.background = options.color
  }
}


const box1 = new Box ({
  selector: '#box1',
  size: 100,
  color: 'red'
})