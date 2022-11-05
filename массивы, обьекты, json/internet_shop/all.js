class ProductService {
  constructor(products = []) {
    this.products = products
  }

  filterBy(search = '') {
    if (!search.trim()) return this.products

    return this.products.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase())
    })
  }

  get(index) {
    return this.products[index]
  }

  getById(id) {
    return this.products.find(product => {
      return product.id === id
    })
  }
}

class CartService {
  constructor() {
    this.cart = {}
  }

  add(product) {
    const key = product.id

    if (this.cart[key]) {
      this.cart[key].amount++
      return
    }

    this.cart[key] = {
      title: product.title,
      price: product.price,
      amount: 1,
    }
  }

  remove(productId) {
    const amount = this.cart[productId].amount
    if (amount === 1) {
      delete this.cart[productId]
    } else {
      this.cart[productId].amount--
    }
  }

  clear() {
    this.cart = {}
  }

  getInfo() {
    const items = Object.keys(this.cart).map(id => {
      return {
        id,
        ...this.cart[id],
      }
    })

    const totalPrice = items.reduce((sum, item) => {
      return (sum += item.amount * item.price)
    }, 0)

    return { items, totalPrice }
  }
}

function ellipsis(string = '', maxLenght = 30) {
  if (string.length > maxLenght) {
    return string.substring(0, maxLenght) + '...'
  }
  return string
}

class HTMLService {
  paintProduct(product) {
    return `
      <li data-id="${product.id}">        
        <img src="${product.image}" title="${product.title}" /> 
        <small>${ellipsis(product.title, 50)}</small>
        <small><strong>$${product.price}</strong></small>     
      </li>
    `
  }

  paintProducts(products = []) {
    return products.map(this.paintProduct).join('')
  }

  paintCartItem(item) {
    return `
      <li data-type="remove" data-id="${item.id}">
        (${item.amount}) 
        ${item.title}
        <strong>$${item.price}</strong>
      </li>
    `
  }

  paintCart({ items, totalPrice }) {
    if (items.length === 0) {
      return `<p>Корзина пуста</p>`
    }

    return `
      <ul class="cart-list">
        ${items.map(this.paintCartItem).join('')}
      </ul>
      <hr />
      <p class="info">
        <span>Общая цена: <strong>$${totalPrice.toFixed(2)}</strong></span>
        <button class="clear" data-type="clear">Очистить</button>
      </p>
    `
  }

  paintError(e) {
    return `<p class="error">${e.message}</p>`
  }
}

function ellipsis(string = '', maxLenght = 30) {
  if (string.length > maxLenght) {
    return string.substring(0, maxLenght) + '...'
  }
  return string
}

class HTMLService {
  paintProduct(product) {
    return `
      <li data-id="${product.id}">
        <img src="${product.image}" title="${product.title}" /> 
        <small>${ellipsis(product.title, 50)}</small>
        <small><strong>$${product.price}</strong></small>
      </li>
    `
  }

  paintProducts(products = []) {
    return products.map(this.paintProduct).join('')
  }

  paintCartItem(item) {
    return `
      <li data-type="remove" data-id="${item.id}">
        (${item.amount}) 
        ${item.title}
        <strong>$${item.price}</strong>
      </li>
    `
  }

  paintCart({ items, totalPrice }) {
    if (items.length === 0) {
      return `<p>Корзина пуста</p>`
    }

    return `
      <ul class="cart-list">
        ${items.map(this.paintCartItem).join('')}
      </ul>
      <hr />
      <p class="info">
        <span>Общая цена: <strong>$${totalPrice.toFixed(2)}</strong></span>
        <button class="clear" data-type="clear">Очистить</button>
      </p>
    `
  }

  paintError(e) {
    return `<p class="error">${e.message}</p>`
  }
}

let productService
const cartService = new CartService()
const htmlService = new HTMLService()

const productsContainer = document.getElementById('products')
const cartContainer = document.getElementById('cart')
const filterInput = document.getElementById('filter')

filterInput.addEventListener('input', event => {
  const value = event.target.value

  const filteredProducts = productService.filterBy(value)

  renderProducts(filteredProducts)
})

productsContainer.addEventListener('click', event => {
  const id = event.target.dataset.id
    ? event.target.dataset.id
    : event.target.closest('li')?.dataset.id

  if (id) {
    cartService.add(productService.getById(+id))
    renderCart()
  }
})

cartContainer.addEventListener('click', event => {
  const type = event.target?.dataset.type
  const id = event.target?.dataset.id

  switch (type) {
    case 'clear':
      cartService.clear()
      renderCart()
      break
    case 'remove':
      cartService.remove(id)
      renderCart()
      break
  }
})

function renderProducts(products) {
  productsContainer.innerHTML = htmlService.paintProducts(products)
}

function renderCart() {
  cartContainer.innerHTML = htmlService.paintCart(cartService.getInfo())
}

async function startApplication() {
  renderCart()
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    productService = new ProductService(data)

    renderProducts(productService.products)
  } catch (e) {
    productsContainer.innerHTML = htmlService.paintError(e)
  }
}

startApplication()
