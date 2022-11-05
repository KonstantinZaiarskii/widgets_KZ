const array = [1, 2, 3, 4, 5, 6, 7]
const next = [8, 9]
const next2 = [10 ,11]

function concat(arr, sub = []) {
  const copy = []

  const totalLength = arr.length + sub.length

  for (let i = 0; i < totalLength; i++) {
    if (i < arr.length) {
      copy[i] = arr[i]
    } else {
      copy[i] = sub[i - arr.length]
    }
  }

  return copy
}

// const copy = array.concat()
// console.log(array.concat(next, next2))
// console.log([0].concat(array, next, next2))
// console.log('copy', copy)
// console.log('array', array)

console.log(concat(array))
console.log(concat(array, [42, 42]))

//У тебя есть два массива firstArray и secondArray. Все, что нужно сделать – это создать переменную concatedArray и с объединенными массивами:

const firstArray = ['J', 'a', 'v', 'a'];
const secondArray = ['S', 'c', 'r', 'i', 'p', 't'];

const concatedArray = [...firstArray, ...secondArray]

console.log(concatedArray); 
// ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

console.log(concatedArray.join('')); // JavaScript