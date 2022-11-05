const array = [1, 1, 2, 3, 5, 8, 13]

const push = (arr, ...num) => {
  arr[arr.length] = num
  return arr.length
}

const res = push(array, 22, 88)
console.log(res)
console.log(array)
