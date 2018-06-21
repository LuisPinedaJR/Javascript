// DOM - document object model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderedNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderedNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderedNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// document.querySelector('#for-fun').addEventListener('change', function(e){
//     console.log(e.target.checked)
// })

