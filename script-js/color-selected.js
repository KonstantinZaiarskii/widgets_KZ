const colors = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
  event.preventDefault()
  setRandomColors()
  if (event.code.toLowerCase() === 'space') {
    setRandomColors()
  }
})

document.addEventListener('click', event => {
  const type = event.target.dataset.type
  const element = event.target

  if (type === 'lock') {
    const node =
      event.target.tagName.toLowerCase() === 'ion-icon' ? event.target : event.target.children[0]

    node.getAttribute('name') === 'lock-open-outline'
      ? node.setAttribute('name', 'lock-closed-outline')
      : node.setAttribute('name', 'lock-open-outline')
  } else if (type === 'copy') {
    copyToClickBoard(event.target.textContent)

    let liFirst = document.createElement('div')
    liFirst.className = 'alert'
    liFirst.innerHTML = 'copy'
    element.after(liFirst)

    setTimeout(() => {
      liFirst.remove()
    }, 500)
  }
})

function copyToClickBoard(text) {
  return navigator.clipboard.writeText(text)
}

function generateRandomColor() {
  const hexCodes = '0123456789ABCDEF'
  let color = ''
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return '#' + color
}

function setRandomColors(isInitial) {
  const cols = isInitial ? getColorsFromHash() : []
  colors.forEach((col, index) => {
    const isLocked = col.querySelector('ion-icon').getAttribute('name') === 'lock-closed-outline'
    const text = col.querySelector('h2')
    const button = col.querySelector('button')

    if (isLocked) {
      cols.push(text.textContent)
      return
    }

    const color = isInitial ? (cols[index] ? cols[index] : chroma.random()) : chroma.random()
    if (!isInitial) {
      cols.push(color)
    }

    text.textContent = color
    col.style.background = color

    setTextColor(text, color)
    setTextColor(button, color)
  })

  updateColorsHash(cols)
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

function updateColorsHash(cols = []) {
  document.location.hash = cols.map(col => col.toString().substring(1)).join('-')
}

function getColorsFromHash() {
  if (document.location.hash.length > 1) {
    return document.location.hash
      .substring(1)
      .split('-')
      .map(color => '#' + color)
  }
  return []
}
setRandomColors(true)
