const notes = ['note 1', 'note 2', 'note3']

// notes.pop() // removes the last in array 'pops out'
// notes.push('My new note') // adds new item in array at the end 'pushes in'
// console.log(notes.shift()) // removes the first element from an array and returns that removed 
// notes.unshift('My first note') // add item in array at the beginning

// notes.splice(1,0, 'wtf') // this can delete and replace, just have enter the value position ex. from [1] to [1] | from [1] to [0] will add

notes[2] = 'this is now the new note 3' //  replaces current item, just enter postion in array ex. [3]


notes.forEach(function(item, index){
    console.log(item)
    console.log(index)

})

console.log(notes.length)
console.log(notes)

//// counting ... 1

// for(let count = 0; count <= 2; count++){
//     console.log(count)
// }

// for(let count = notes.length - 1; count >= 0; count--){
//     console.log(notes[count])
// }