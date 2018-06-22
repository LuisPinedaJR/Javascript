const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined){
    location.assign('/index.html')
}

titleElement.value = note.title
titleElement.addEventListener('input', function(e){
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.value = note.body
bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})
// setup input event for title
// update note object and save notes list
// repeat steps 1-2 for body
// setup a remove button that removes notes and sends users back to home page

