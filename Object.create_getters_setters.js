/* Способ создания объекта, Object.create( ) с параметрвми в виде двух объектов.
Первый параметр является прототипом для создаваемого объекта, в него записываем метод для обьекта
Для свойств объекта во втором параметре присутствуют дискрипторы с значениями по умолчанию false
для предотвращения изменений. Чтобы менять значения свойств, необходимо поменять значения дискрипторов на true.
*/
const person = Object.create(
  {
    calculateAge() {
      console.log("Age:", new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: "Maxim",
      enumerable: true, // false по умолчанию  у всех дискрипторов
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1988,
      enumerable: true,
      writable: true,
      configurable: true,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        document.body.style.background = "red";
      },
    },
  }
);

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("Key", key, person[key]);
  }
}
// Key name Maxim
// Key birthYear 1988

person.calculateAge(); // Age: 33
