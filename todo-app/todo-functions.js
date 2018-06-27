
// fetch existing todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON !== null){
        return JSON.parse(todosJSON)
    }else{
        return []
    }
}
// save todos to localstorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}
// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo !== undefined){
        todo.completed = !todo.completed
    }
}


// render application todos based on filters
const renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter((todo) =>todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    filteredTodos = filteredTodos.filter((todo) =>!filters.hideCompleted || !todo.completed)
  
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    
    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}
// get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // setups the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', (e) =>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
}
// get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) =>{
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}
