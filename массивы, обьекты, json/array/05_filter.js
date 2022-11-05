const array = [1, 2, 3, 4, 5, 6, 7]

function log(args) {
  console.log(args)
}

function filter(arr, callback) {}

log(array.filter(item => item % 2 === 0))

const filtered = array
  .filter(item => item % 2)
  // 3 % 2 => return 1
  // 4 % 2 => return 0
  .filter(item => item >= 3)
  .map(item => item ** 2)
  .filter(item => item > 10)

log(filtered)

const values = [42, 1, null, undefined, 'a', 0, 1, 42, 'Vladilen', false, true, '', 'b', NaN]

log(values.filter(item => item))

const text = `Привет, я мат1 как раз тебя видеть, мат2 как давно тебя не было видно. Ты мат1 какая красива. Мат2 я рад.`

const restr = ['мат1', 'мат2']

function clear(word) {
  return !restr.includes(word.toLowerCase())
}

const clean = text.split(' ').filter(clear).join(' ')

log(clean)

// Тебе дан массив имен names. Создай переменную filteredNames и отфильтруй массив так, чтобы в нем остались только те имена, длина которых больше либо равна 5:

const names = ['Александр', 'Ян', 'Оля', 'Вячеслав', 'Маша', 'Анатолий']

const filteredNames = names.filter(item => item.length >= 5)

console.log(filteredNames) // ['Александр', 'Вячеслав', 'Анатолий']

// TASK5 filter()

//Дан массив объектов people с информацией о людях. Необходимо создать переменную adultPeople, в которой будут только совершеннолетние люди.

const peopleFilter = [
  { name: 'Ольга', age: 22 },
  { name: 'Сергей', age: 20 },
  { name: 'Светлана', age: 16 },
  { name: 'Василий', age: 27 },
  { name: 'Мария', age: 14 },
  { name: 'Олег', age: 30 },
]

const adultPeople = peopleFilter.filter(el => el.age >= 18)

console.log(adultPeople)

// Вывод:
// [
//   {name: 'Ольга', age: 22},
//   {name: 'Сергей', age: 20},
//   {name: 'Василий', age: 27},
//   {name: 'Олег', age: 30},
// ]
