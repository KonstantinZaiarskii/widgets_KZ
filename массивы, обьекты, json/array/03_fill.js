const array = [1, 2, 3, 4, 5, 6, 7]

// console.log(array.fill('42', 2, 4))
// console.log(new Array(5).fill(''))

function fill(arr, start, end) {}

// ========

function toHTML(_, index) {
  const tag = `h${index + 1}`
  return `<${tag}>This is text ${tag}</${tag}>`
}

const template = new Array(6).fill('').map(toHTML).join('')

console.log(template)

document.body.innerHTML = template

const arrNumb = new Array(100).fill(0)

console.log(arrNumb) // [0, 0, 0, 0, 0, 0, /* ... , */ 0]