// array with 5 todo taks
// you have x todos
// print first and second to last items -> Todo: walk the dog

const todos = [{
    text: 'eat',
    completed: true
}, {
    text: 'gym',
    completed: false
}, {
    text: 'Buy Food',
    completed: true
}, {
    text: 'walk the dog',
    completed: true
}, {
    text: 'eat again',
    completed: false
}]

/// find a specifi item delete it
const deleteTodo = function(todos, todoText){
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    /// if there is a match it will 1 and if theres is no match console will return -1 so
    // here we use index > -1 to find match
    if(index > -1){
        todos.splice(index, 1) /// splice is used to delete the matched item from the object above.
    }
}

deleteTodo(todos, 'buy food') // functioned called and arguments passed.
console.log(todos) //logs to console results.


////////////////////////////////////////////
// todos.splice(2,1)
// todos.push('Buy coffee')
// todos.shift()

// console.log(`You have ${todos.length} todos!`)

// todos.forEach(function(todo, index){ // passing a function in a function also called callback
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })

////////////////////////////////////////////
// console.log(`Todo: ${todo[0]}, ${todo[3]}`) 

// for(let count = 0; count < todos.length; count++){
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }


/// the for statement is used when counting is not in order but when in order its best to use forEach //////