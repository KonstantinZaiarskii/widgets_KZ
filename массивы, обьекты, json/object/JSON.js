// TASK1 stringify()
//Дан объект person с информацией о человеке. Необходимо создать переменную jsonPerson, в которой будет храниться объект person в виде JSON.

const person1 = {
  name: 'Владислав',
  age: 27,
  profession: 'Frontend-developer',
  favorite_activity: 'Watch TV series',
}

const jsonPerson = JSON.stringify(person1)

console.log(jsonPerson)

// Вывод:
// '{"name":"Владислав","age":27,"profession":"Frontend-developer","favorite_activity":"Watch TV series"}'

// TASK2 parse()

//Дана строка json. Необходимо создать переменную object, преобразовав json строку в объект.

const json =
  '{"name":"Илья","age":23,"profession":"Fullstack-developer","favorite_activity":"Read books"}'

const object = JSON.parse(json)

console.log(object)

// Вывод:
// {
//   name: 'Илья',
//   age: 23,
//   profession: 'Fullstack-developer',
//   favorite_activity: 'Read books'
// }

// TASK сравнение объектов

//Дан следующий код:

const firstObj = {
  name: 'Владимир',
  age: 23,
  profession: 'Frontend-developer',
}

const secondObj = firstObj

const thirdObj = {
  name: 'Владимир',
  age: 23,
  profession: 'Frontend-developer',
}

console.log(firstObj === secondObj)
console.log(firstObj === thirdObj)
//Не запуская код, попробуйте ответить на вопрос: Что выведет каждый console.log()?

// TASK функция в объекте

//Дан объект person. Необходимо написать метод getInfo(), который будет возвращать информацию о человеке в виде сообщения: ”Меня зовут name. Мне age лет. Я - profession.”. Вместо name нужно подставить имя человека, вместо age - возраст, а вместо profession - профессию.

//Информацию (name, age, profession) необходимо брать из объекта person.

const person2 = {
  name: 'Валера',
  age: 25,
  profession: 'Frontend-developer',
  getInfo: function () {
    console.log(`Меня зовут ${person2.name}. Мне ${person2.age} лет. Я - ${person2.profession}.`)
  },
}

person2.getInfo() // Меня зовут Валера. Мне 25 лет. Я - Frontend-developer.
