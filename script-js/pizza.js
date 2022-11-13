const inputsCheckbox = document.querySelectorAll('.container-custom-checkbox input'),
  ingredients = document.querySelectorAll('.current-pizza-item'),
  drinks = document.querySelectorAll('.select-drink-item'),
  totalAmount = document.querySelector('.total-amount>.summa'),
  orderBtn = document.querySelector('.typical-btn'),
  modalWindow = document.querySelector('.modal-window'),
  submitBtn = document.querySelector('.modal-window__submit-btn')

const subject = document.querySelector('.modal-window__subject'),
  ingredientsSpan = document.querySelector('.modal-window__subject'),
  drinksSpan = document.querySelector('.modal-window__drinks')
//Additing ibgridients to pizza (функция добавляет ингридиенты)

const addIngridients = checkbox => {
  //функция отслеживания чекбоксов
  const nodesArray = Array.from(checkbox)
  const ingredientsArray = Array.from(ingredients)
  ingredientsArray.splice(0, 2) // удаляем два первых эдементы из массива

  for (let node of checkbox) {
    node.addEventListener('click', event => {
      event.target.parentNode.classList.toggle('active')
      const index = nodesArray.indexOf(event.target)
      ingredientsArray[index].classList.toggle('active')
      calculateOrder()
    })
  }
}

addIngridients(inputsCheckbox)

// Additing drinks (добаволяем напитки)

const addDrinks = drinkItems => {
  for (let item of drinkItems) {
    item.addEventListener('click', event => {
      event.target.parentNode.classList.toggle('active')
      calculateOrder()
    })
  }
}

addDrinks(drinks)

//Calculate order (считаем сумму)

const calculateOrder = () => {
  const ingredients = document.querySelectorAll('.container-custom-checkbox.active'), //чекбоксы с классом active
    drinks = document.querySelectorAll('.select-drink-item.active')

  const startPrice = 300, //стоимость ингридиентов
    ingredientsPrice = ingredients.length * 25,
    drinksPrice = drinks.length * 95

  totalAmount.innerHTML = `${startPrice + ingredientsPrice + drinksPrice}₽`
}

//modal window for orderBtn

window.addEventListener('click', event => {
  if (event.target === modalWindow) {
    modalWindow.classList.add('none')
  }
})

submitBtn.addEventListener('click', () => {
  modalWindow.classList.add('none')
})

const prepareWindowModalContent = () => {
  subject.innerHTML = ''
  ingredientsSpan.innerHTML = ''
  drinksSpan.innerHTML = ''

  const addadIngredients = document.querySelectorAll('.container-custom-checkbox.active'), //чекбоксы с классом active
    addadDrinks = document.querySelectorAll('.select-drink-item.active')

  let ingredientsList = []
  if (addIngridients) {
    for (let ingredients of addadIngredients) {
      ingredientsList.push(ingredients.innerText)
    }
  }

  let drinksList = []
  if (addDrinks) {
    for (let drinks of addadDrinks) {
      drinksList.push(drinks.dataset.name)
    }
  }
  const totalIngredients = ingredientsList.join(', ') || 'нет иннгредиентов'
  const totalDrinks = drinksList.join(', ') || 'нет напитков'
  const totalText = `Вы заказали пиццу с ингридиентами : '${totalIngredients}', а так же напитки: '${totalDrinks}', с Вас ${totalAmount.innerHTML}`
  subject.innerHTML = totalText
}

orderBtn.addEventListener('click', () => {
  modalWindow.classList.remove('none')
  prepareWindowModalContent()
})
