// const array = [1, 1, 2, 3, 5, 8, 13]

// function findIndex(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     const doesExists = callback(arr[i])
//     if (doesExists) {
//       return arr[i]
//     }
//   }
// }

// const res = array.findIndex(item => item === 81)

// console.log(res)

//Тебе дан массив computers с объектами. Найди индекс элемента “MacBook Pro 13” и, если он есть, удали элемент по данному индексу.

const computers = [
  {
    name: 'MacBook Pro 13',
    price: 150000,
  },
  {
    name: 'MacBook Pro 14',
    price: 200000,
  },
  {
    name: 'MacBook Pro 16',
    price: 300000,
  },
]

const findIndexComp = computers.findIndex(
  item => item.name === 'MacBook Pro 13' && item.price === 150000
)

computers.forEach((item, index) => {
  if (findIndexComp === index) {
    computers.splice(index, 1)
  }
})

console.log(computers)
/*
[ 
  {name: 'MacBook Pro 14', price: 200000},
  {name: 'MacBook Pro 16', price: 300000}
]
*/

// TASK4 findIndex() 
// Дан массив объектов people с информацией о людях. Необходимо создать переменную personIndex, в которой будет индекс первого человека с возрастом 22 года.

const peopleFindIndex = [
  { name: 'Александр', age: 18 },
  { name: 'Нина', age: 21 },
  { name: 'Алексей', age: 22 },
  { name: 'Виталий', age: 26 },
  { name: 'Инна', age: 22 },
  { name: 'Марина', age: 26 },
]

const personIndex = peopleFindIndex.findIndex(item => item && item.age === 22)

console.log(personIndex); // 2
console.log(peopleFindIndex[personIndex]); // {name: 'Алексей', age: 22}