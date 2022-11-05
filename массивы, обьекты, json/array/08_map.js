const array = [1, 1, 2, 3, 5, 8, 13, 12]

const map = (arr, callbackFn) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callbackFn(arr[i], i, arr))
  }
  return result
}

const newArray = map(array, item => item ** 2)
console.log('newArray', newArray)

// Тебе дан массив ids, состоящий из id людей и объект peoplesObject, где ключ — id человека, а значение — его имя. Необходимо создать новый массив peoples при помощи метода map(), в котором будут содержатся строки вида: “NAME (id: ID)”, где:

// NAME — имя (соответствует значению id из массива ids) 
// ID — его id.
// Порядок элементов должен остаться тем же.

const ids = [15, 1, 20, 5]
const peoplesObject = {
  1: 'Alex',
  5: 'Elena',
  15: 'Igor',
  20:'Vladilen',
}
// const keys = Object.keys(peoplesObject)

// keys.forEach(key => {
//   console.log(`${key} : ${peoplesObject[key]}`)
//   const peoples = ids.map(id => (key == id ? `${peoplesObject[key]} (id:${id})` : ""))
//   console.log(peoples)
// })

for (var key of peoplesObject) {
  console.log(` ${[key]} ${peoplesObject[key]}`)
}

const peoples = ids.map(id => (key == id ? `${peoplesObject[key]} (id:${id})` : 'err'))

console.log(peoples)

// Your code here...

console.log(peoples)
// ['Igor (id: 15)', 'Alex (id: 1)', 'Vladilen (id: 20)', 'Elena (id: 5)']

// TASK5 map()

// Дан массив с работниками компании. В этом месяце они все хорошо потрудились и заслужили повышение заработной платы.

// Необходимо создать новый массив workersWithUpdatedSalary, в котором будут те же объекты, но с увеличенной зарплатой каждому сотруднику на 300 долларов.
const arrPeople = [
  { name: 'Игорь', profession: 'Frontend-developer', salary: 2400 },
  { name: 'Ирина', profession: 'Backend-developer', salary: 2200 },
  { name: 'Максим', profession: 'DevOps-engineer', salary: 2300 },
  { name: 'Екатерина', profession: 'Project-manager', salary: 2500 },
]

const workersWithUpdatedSalary = arrPeople.map(item => {
  const container = {}
  container.name = item.name
  container.profession = item.profession
  container.salary = item.salary + 300

  return container
})

console.log(arrPeople)
console.log(workersWithUpdatedSalary)

// Вывод:
// [
//   {name: 'Игорь', profession: 'Frontend-developer', salary: 2700},
//   {name: 'Ирина', profession: 'Backend-developer', salary: 2500},
//   {name: 'Максим', profession: 'DevOps-engineer', salary: 2600},
//   {name: 'Екатерина', profession: 'Project-manager', salary: 2800},
// ]