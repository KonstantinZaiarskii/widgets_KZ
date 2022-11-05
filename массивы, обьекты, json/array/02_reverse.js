const array = [1, 2, 3, 4, 5, 6, 7]

function reverse(arr) {
  const copy = arr.concat()
  for (let i = 0; i < arr.length; i++) {
    arr[i] = copy[arr.length - 1 - i]
    // 0 -> 7 - 1 - 0 = 6
    // 1 -> 7 - 1 - 1 = 5
  }

  return arr
}

// console.log(array.concat().reverse())
// console.log(array)

console.log(reverse(array))
console.log(array)

// Тебе даны массивы array1 и array2, первые элементы которых всегда равны true или false, а остальные элементы – числа в порядке возрастания. Нужно создать переменные finalArray1 и finalArray2, основываясь на массивах array1 и array2 соответственно, по следующим условиям:

// Если первый элемент равен true, тогда нужно удалить первый элемент и перевернуть массив. Иначе также удалить первый элемент, но не переворачивая массив.
// Изначальные массивы не должны измениться

const array1 = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const array2 = [false, -2, -1, 0, 1, 2, 3, 4, 5, 6]

const searchElmArr = (arr, newArr) => {
  if (arr[0]) {
    newArr = arr.slice()
    newArr.shift()
    newArr.reverse()
  } else {
    newArr = arr.slice()
    newArr.shift()
  }
  return newArr
}

console.log(array1)
console.log(searchElmArr(array1))

console.log(array2) 
console.log(searchElmArr(array2)) 
