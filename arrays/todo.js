// array with 5 todo taks
// you have x todos
// print first and second to last items -> Todo: walk the dog

const todos = ['eat', 'gym,', 'laundry', 'walk the dog', 'eat']

todos.splice(2,1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos!`)

todos.forEach(function(todo, index){ // passing a function in a function also called callback
    const num = index + 1
    console.log(`${num}. ${todo}`)
})
// console.log(`Todo: ${todo[0]}, ${todo[3]}`) 

