// const notes = ['Note 1', 'Note 2', 'Note3']
const notes = [{
        title: 'My next trip',
        body: 'I would like to go to spain'
    },{
        title: 'Habits to work on',
        body: 'Exercise. Eating a bit better.'
    },{
        title: 'Office modification',
        body: 'Get a new seat'
    }]

    const findNote = function(notes, noteTitle){
       return notes.find(function(note, index){
            return note.title.toLowerCase() === noteTitle.toLowerCase()
        })

    }

    const note = findNote(notes, 'office modification')
    console.log(note)



    // const findNote = function(notes, noteTitle){
    //     const index = notes.findIndex(function(note, index){
    //         return note.title.toLowerCase() === noteTitle.toLowerCase()
    //     })
    //     return notes[index]
    // }

    // const note = findNote(notes, 'office modification')
    // console.log(note)




// notes.pop() // removes the last in array 'pops out'
// notes.push('My new note') // adds new item in array at the end 'pushes in'
// console.log(notes.shift()) // removes the first element from an array and returns that removed 
// notes.unshift('My first note') // add item in array at the beginning

// notes.splice(1,0, 'wtf') // this can delete and replace, just have enter the value position ex. from [1] to [1] | from [1] to [0] will add

// notes[2] = 'this is now the new note 3' //  replaces current item, just enter postion in array ex. [3]

// notes.forEach(function(item, index){
//     console.log(item)
//     console.log(index)

// })

//// counting ... 1

// for(let count = 0; count <= 2; count++){
//     console.log(count)
// }

// for(let count = notes.length - 1; count >= 0; count--){
//     console.log(notes[count])
// }

// console.log(notes.length)
// console.log(notes)

// // console.log(notes.indexOf({}))

// const index = notes.findIndex(function(notes, index){
//     return notes.title === 'Habits to work on'
// })
// console.log(index)