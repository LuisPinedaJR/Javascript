// fetch existing todos from local storage
const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON !== null){
        return JSON.parse(todosJSON)
    }else{
        return []
    }
}
// save todos to localstorage
const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}
// render application todos based on filters
const renderTodos = function(todos, filters){
    let filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function(todo){
        return !filters.hideCompleted || !todo.completed
    })
  
    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}
// get the DOM elements for an individual note
const generateTodoDOM = function(todo){
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)
    // setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)
    // setups the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    
    return todoEl
}
// get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}
