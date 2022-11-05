const array = [1, 1, 2, 3, 5, 8, 13, 12]

const shift = arr => {
  const firstItem = arr[0]
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length -= 1

  return firstItem
}

const res = shift(array)
const res2 = shift(array)

console.log(res)
console.log(res2)
console.log(array);

//Дан массив с массивами arrays. Необходимо проверить каждый внутренний массив на то, начинается ли он с 0. Если первый элемент — 0, то этот элемент (число 0), необходимо удалить.
// const arrays = [
//   [0, 1, 2, 3],
//   [10, 2, 5, 8],
//   [12, 5, 23, 25],
//   [0, -2, 4, 10],
//   [-1, 0, 54, 32],
// ]
// const delFirstElement = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     const itemArr = arr[i]
//     for (let i = 0; i < itemArr.length; i++) {
//       if (itemArr[0] === 0) {
//         const arrShift = itemArr.shift()
//         arr.push(arrShift)
//       }
//     }
//   }
//   return arr
// }
// const resTask3 = delFirstElement(arrays)
// console.log(resTask3)
/*
[
  [1, 2, 3],
  [10, 2, 5, 8],
  [12, 5, 23, 25],
  [-2, 4, 10],
  [-1, 0, 54, 32]
]
*/
