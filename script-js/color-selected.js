const colors = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
  event.preventDefault()
  if (event.code.toLowerCase() === 'space') {
    setRandomColors()
  }
})

document.addEventListener('click', event => {
  const type = event.target.dataset.type
  console.log(type)

  if (type === 'lock') {
    const node =
      event.target.tagName.toLowerCase() === 'ion-icon' ? event.target : event.target.children[0]
      

    node.getAttribute('name') === 'lock-open-outline'
      ? node.setAttribute('name', 'lock-closed-outline')
      : node.setAttribute('name', 'lock-open-outline')
  } else if (type === 'copy') {
    copyToClickBoard(event.target.textContent)

    // let liFirst = document.createElement('div')
    // liFirst.className = 'alert'
    // liFirst.innerHTML = 'hi'
    // colors.after(liFirst)
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

function setRandomColors() {
  colors.forEach(col => {
    const isLocked = col.querySelector('ion-icon').getAttribute('name') === 'lock-closed-outline'
    const text = col.querySelector('h2')
    const button = col.querySelector('button')
    const color = chroma.random()

    if (isLocked) {
      return
    }

    text.textContent = color
    col.style.background = color

    setTextColor(text, color)
    setTextColor(button, color)
  })
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}
setRandomColors()
