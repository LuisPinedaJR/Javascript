
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

const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}
// Toggle the completed value for a given todo
const toggleTodo = function(id){
    const todo = todos.find(function(todo){
        return todo.id === id
    })

    if(todo !== undefined){
        todo.completed = !todo.completed
    }
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
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function(){
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
    removeButton.addEventListener('click', function(e){
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
}
// get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}
