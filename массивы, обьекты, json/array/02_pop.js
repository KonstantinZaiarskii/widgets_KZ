const array = [1, 1, 2, 3, 5, 8, 13, 12]

const pop = arr => {
  const lastItem = arr[arr.length - 1]
  arr.length -= 1
  return lastItem
}

const res = pop(array)
console.log(array)
console.log(res)
