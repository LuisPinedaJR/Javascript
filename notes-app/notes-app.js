// DOM - document object model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
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


const filters = {
    searchText: ''
}

const renderedNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderedNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderedNotes(notes, filters)
})

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// document.querySelector('#for-fun').addEventListener('change', function(e){
//     console.log(e.target.checked)
// })

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})