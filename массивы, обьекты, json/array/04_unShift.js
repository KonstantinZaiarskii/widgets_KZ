const array = [1, 1, 2, 3, 5, 8, 13, 12]

const unShift = (arr, ...numbers) => {
  const merget = [...numbers, ...arr]

  for (let i = 0; i < merget.length; i++) {
    arr[i] = merget[i]
  }

  return arr.length
}

const res = unShift(array, 42, 11)
const res2 = unShift(array, 66)

console.log(res)
console.log(res2)
console.log(array)

//Дан массив с именами, упорядоченными по алфавиту: “Алексей”, “Артур”, “Владимир”. Необходимо добавить новые имена “Александр” и “Евгений” таким образом, чтобы алфавитный порядок сохранился.

const names = ['Алексей', 'Артур', 'Владимир']

const name1 = 'Александр'
const name2 = 'Евгений'
names.unshift(name1 , name2)
names.sort()

console.log(names)
// ['Александр', 'Алексей', 'Артур', 'Владимир', 'Евгений']
