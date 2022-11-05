const array = [1, 2, 3, 4, 5, 6, 7]

function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) return false
  }
  return true
}

function some(arr, fn) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (!fn(arr[i])) return false
  // }
  return true
}

console.groupCollapsed('every')
console.log(array.every(i => i % 2))
console.log(array.every(i => typeof i === 'number'))
console.log(every(array, i => i % 2))
console.log(every(array, i => typeof i === 'number'))
console.groupEnd()

console.group('some')
console.log(array.some(i => i % 2))
console.log(array.some(i => typeof i === 'string'))
console.log(some(array, i => i % 2))
console.log(some(array, i => typeof i === 'string'))

console.groupEnd().some()

// Тебе дан массив чисел arrayNumbers. Необходимо создать переменную isEven, которая будет true или false в зависимости от того, являются ли все числа массива четными:

const arrayNumbersEvery = [2, 4, 10, 6, 8, 14, 24, 50]

const isEven = arrayNumbersEvery.every(i => i % 2 === 0
)

console.log(isEven) // true

// Тебе дан массив чисел arrayNumbers. Необходимо создать переменную hasMoreThenHundred, которая будет true или false в зависимости от того, есть ли в нем хотя бы одно число строго больше 100:

const arrayNumbersSome = [10, 15, 5, 100, 50, 101, 203, 800]

const hasMoreThenHundred = arrayNumbersSome.some(i => i > 100)

console.log(hasMoreThenHundred) // true
