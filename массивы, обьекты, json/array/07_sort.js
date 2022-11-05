const start = 'a'.charCodeAt()
const end = 'z'.charCodeAt()

Array.prototype.shuffle = function () {
  let currentIndex = this.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]]
  }

  return this
}

const letters = new Array(end - start + 1)
  .fill('')
  .map((_, index) => String.fromCharCode(start + index))
  .shuffle()
  .sort()

// console.log(letters)

const numbers = new Array(20)
  .fill('')
  .map((_, index) => index + 1)
  .shuffle()

// console.log(numbers.sort((a, b) => a - b))
// console.log(numbers.sort((a, b) => b - a))

console.log([1, 2, 3, 4, 5, 6, 7, 8].shuffle())

//Тебе дан массив чисел arrayNumbers. Необходимо отсортировать массив в порядке убывания:

const arrayNumbers = [10, -2, -3, 0, 1, 30, 25]

arrayNumbers.sort((a, b) => b - a)

console.log(arrayNumbers) // [30, 25, 10, 1, 0, -2, -3]
