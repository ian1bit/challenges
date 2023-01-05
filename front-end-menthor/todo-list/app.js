const textAreaNewTodo = document.querySelector('#new-todo')
const todoContainer = document.querySelector('#todo-container')
const itensToTodo = document.querySelector('#itens-to-todo')
const buttonAllTasks = document.querySelector('#todo-all')
const buttonActive = document.querySelector('#active')
const buttonCompleted = document.querySelector('#completed')
const buttonClearCompleted = document.querySelector('#clear-completed')

let tasks = []
let inputList = []
let liListTask = []
let indexForInputChecked = []

const ifChecked = () => {
  tasks.forEach((task, index) => {
    if(indexForInputChecked.includes(task)) {
      return 'checked'
    }
  })
}

const addTaskToDOM = () => {
  todoContainer.innerHTML = ''
  tasks.forEach((task, index) => {
    const li = document.createElement('li')

    li.setAttribute('data-index', `${index}`)
    li.setAttribute('data-js', '')
    li.innerHTML = `
      <label>
        <input type="checkbox" name="todo" ${ifChecked()} class="todo-item">
        <p>${task}</p>
        <span class="checkmark"></span>
      </label>
      <button class="btn-delete" onClick="removeTask(${index})">
        <img src="images/icon-cross.svg" alt="">
      </button>
    `

    textAreaNewTodo.value = ''
    todoContainer.appendChild(li)
  })
}

const addTaskArray = newTask => {
  tasks.push(newTask)
  init()
}

const removeTask = indexRemove => {
  tasks = tasks.filter((_, index) => index !== indexRemove)
  init()
}

const buttonDeleteVisibility = () => {
  liListTask = document.querySelectorAll('[data-js]')

  liListTask.forEach(input => {
    input.addEventListener('mouseenter', e => {
      e.target.children[1].style.display = 'initial'
    })
  })

  liListTask.forEach(input => {
    input.addEventListener('mouseleave', e => {
      e.target.children[1].style.display = 'none'
    })
  })
}

const totalTasks = () => {
  itensToTodo.textContent = `${tasks.length} items left`
}

const addNewTaskToArray = event =>  {
  const keyEnter = event.keyCode === 13
  const keyPressioned = event.target.value

  if (keyEnter) {
    inputAddCheckedAttribute()

    keyPressioned !== '' ? addTaskArray(keyPressioned)
      : alert('o campo precisa conter algum valor')
  }
}

const inputAddCheckedAttribute = () => {
  inputList = document.querySelectorAll('input[type="checkbox"]')
  indexForInputChecked = []

  inputList.forEach((input, index) => {
    if (input.checked) {
      const taskCompleted = input.nextElementSibling.textContent

      indexForInputChecked.push(taskCompleted)
    }
  })
}

const toggleClass = (elemetAddClass, elementRemoveClass1, elementRemoveClass2) => {
  elemetAddClass.classList.add('selected')
  elementRemoveClass1.classList.remove('selected')
  elementRemoveClass2.classList.remove('selected')
}

const inputListVisibleOn = condicao => {
  inputList = document.querySelectorAll('.todo-item')

  const inputListChecked = inputList.forEach((input) => {
    const li = input.parentNode.parentNode

    li.style.display = 'flex'

    if (input.checked === condicao) {
      li.style.display = 'none'
    }
  })
}

const allTasksToVisible = () => {
  toggleClass(buttonAllTasks, buttonActive, buttonCompleted)
  inputListVisibleOn()
}

const activeTasksToVisible = () => {
  toggleClass(buttonActive, buttonAllTasks, buttonCompleted)
  inputListVisibleOn(true)
}

const completedTasksToVisible = () => {
  toggleClass(buttonCompleted, buttonAllTasks, buttonActive)
  inputListVisibleOn(false)
}

const clearToCompletedTasks = () => {
  inputList = document.querySelectorAll('.todo-item')
  
  let arrayInputCompleted = []

  inputList.forEach((input) => {
    if (input.checked) {
      arrayInputCompleted.push(input.nextElementSibling.textContent)
    }
  })

  tasks = tasks.filter(task => arrayInputCompleted.indexOf(task) === -1)
  toggleClass(buttonAllTasks, buttonActive, buttonCompleted)
  init()
}

const refreshToTodoListCheckeds = () => {
  const labels = document.querySelectorAll('label')

  labels.forEach(label => label.addEventListener('click', (inputClicked) => {
    inputClicked.currentTarget.children[0].setAttribute('checked', '')
  }))
}

const init = () => {
  addTaskToDOM()
  totalTasks()
  buttonDeleteVisibility()
}

textAreaNewTodo.addEventListener('keyup', addNewTaskToArray)
buttonAllTasks.addEventListener('click', allTasksToVisible)
buttonActive.addEventListener('click', activeTasksToVisible)
buttonCompleted.addEventListener('click', completedTasksToVisible)
buttonClearCompleted.addEventListener('click', clearToCompletedTasks)
