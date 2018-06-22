// DOM - document object model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderedNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    const id =  uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderedNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderedNotes(notes, filters)
    }
})

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// document.querySelector('#for-fun').addEventListener('change', function(e){
//     console.log(e.target.checked)
// })

