const array = [1, 1, 2, 3, 5, 8, 13, 12]

const foreach = (arr, callbackFn) => {
  for (let i = 0; i < arr.length; i++) {
    callbackFn(arr[i], i, arr)
  }
}

foreach(array, function (item, index, arr) {
  console.log(`item: ${item}, index: ${index} arr: ${arr}`)
})

// Тебе дан массив с названиями методов массивов. Необходимо вывести в консоль сообщения
// “Метод ИМЯ_МЕТОДА” для каждого метода массива.

const methods = [
  'push()',
  'pop()',
  'shift()',
  'unshift()',
  'slice()',
  'splice()',
  'forEach()',
  'map()',
  'find()',
  'findIndex()',
]

methods.forEach(item => item)

console.log(methods)

// Вывод
// Метод push()
// Метод pop()
// Метод shift()
// Метод unshift()
// Метод slice()
// Метод splice()
// Метод forEach()
// Метод map()
// Метод find()
// Метод findIndex()
