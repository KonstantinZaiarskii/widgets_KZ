const array = [1, 2, 3, 4, 5, 6, 7, 8]

const result = array.reduce((sum, item) => sum + item, 0)

const result2 = array.reduce((acc, item, index) => {
  acc.push(item * item)
  return acc
}, [])

const cart = [
  { title: 'Apple', price: 49 },
  { title: 'Banana', price: 149 },
]

const total = cart.reduce((sum, item) => {
  return sum + item.price
}, 0)


console.log(total)

// Тебе дан массив чисел arrayNumbers:

// Создай переменную sum, которая будет содержать сумму всех элементов массива.
// Создай переменную average, которая будет содержать среднее арифметическое чисел из массива (результат округлить до целых).

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sum = arrayNumbers.reduce((sum, item) => {
  return sum + item
})
const average = arrayNumbers.reduce((sum, item, index, arr) => {
  const sumItem = sum + item
  if (index === arr.length - 1) {
    return sumItem / arr.length
  }

  return Math.floor(sumItem)
})

console.log(sum) // 45
console.log(average) // 5


// TASK5 reduce()

//Дан массив workers с сотрудниками компании. За день каждый выполнил различное количество задач (tasks). Необходимо создать переменную //tasksSum, которая будет содержать общее количество выполненных задач всеми сотрудниками.

const workers = [
  { name: 'Игорь', profession: 'Frontend-developer', tasks: 7 },
  { name: 'Ирина', profession: 'Backend-developer', tasks: 5 },
  { name: 'Максим', profession: 'DevOps-engineer', tasks: 6 },
  { name: 'Екатерина', profession: 'Project-manager', tasks: 4 },
]

const tasksSum = workers.reduce((sum, item) => {
  return sum + item.tasks
}, 0)

console.log(tasksSum) // 22