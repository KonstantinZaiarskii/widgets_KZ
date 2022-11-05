// const array = [1, 1, 2, 3, 5, 8, 13]

// function find(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     const doesExists = callback(arr[i])
//     if (doesExists) {
//       return arr[i]
//     }
//   }
// }

// // const res = array.find(item => item === 8)

// const people = [
//   {name: 'Vladilen', age: 28},
//   {name: 'Elena', age: 23},
//   {name: 'Elena', age: 42}
// ]

// const res = find(people, person => person.name === 'Elena' && person.age > 30)

// console.log(res)

// Вам дан массив computers с объектами. Найди в массиве объект “MacBook Pro 16” и выведи его в консоль.

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


const macbook = computers.find(item => item.name === "MacBook Pro 16")
console.log(macbook)
// { name: 'MacBook Pro 16', price: 300000 }


// TASK3 find() 
// Дан массив объектов people с информацией о людях. Необходимо создать переменную frontendDev, в которой будет содержаться объект человека из массива people с профессией 'Frontend-developer'.

const people = [
  {name: 'Иван', profession: 'Backend-developer'},
  {name: 'Анастасия', profession: 'DevOps-engineer'},
  {name: 'Василий', profession: 'Frontend-developer'},
  {name: 'Оксана', profession: 'Project-manager'},
];

const frontendDev = people.find(item => item.profession === 'Frontend-developer')

console.log(frontendDev); // {name: 'Василий', profession: 'Frontend-developer'}
