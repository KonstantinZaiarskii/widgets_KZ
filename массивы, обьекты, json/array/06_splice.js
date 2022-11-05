const array = [1, 1, 2, 3, 5, 8, 13, 12]

console.log(array.splice(2, 2))
console.log(array)

// Тебе дан массив languages с элементами: “JavaScript”, “C#”, “Java”, “English”, “Go”, “Python”. Одной строчкой кода удали лишний элемент и замени его на любой подходящий.

const languages = ['JavaScript', 'C#', 'Java', 'English', 'Go', 'Python']

function foo(arr) {
  arr.splice(3, 1, 'C++')
  return arr
}
console.log(foo(languages))
// ['JavaScript', 'C#', 'Java', 'C++', 'Go', 'Python']
