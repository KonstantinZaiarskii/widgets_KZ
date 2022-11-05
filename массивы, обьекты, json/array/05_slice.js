const array = [1, 1, 2, 3, 5, 8, 13, 12]

const slice = (arr, start, end) => {
  const result = []
  let lastIndex = arr.length

  if (end < 0) {
    lastIndex -= Math.abs(end)
  } else if (end > 0) {
    lastIndex = end ? end : arr.length
  }
  for (let i = start; i < lastIndex; i++) {
    result.push(arr[i])
  }

  return result
}

const res = slice(array, 2)
const res2 = slice(array, 2, -4)

console.log(res)
console.log(res2)
console.log(array)

// Тебе даны 2 массива arr1 и arr2. Напиши функцию foo(), которая будет принимать массив и делать с ним следующее:

// Брать последние 3 элемента
// Увеличивать их в 2 раза
// Возвращать этот массив (с 3 элементами)

const arr1 = [1, 7, 4, 8, 3, 4, 5]
const arr2 = [4, 2, 7, 9, 3, 1, 3, 6, 4, 3]

function foo(arr) {
  const sliceItem = arr.slice(-3)
  const increaseNum = sliceItem.map(item => item * 2)
  return increaseNum
}

console.log(foo(arr1))
console.log(foo(arr2))

// console.log(foo(arr1));     // [6, 8, 10]
// console.log(foo(arr2));     // [12, 8, 6]
