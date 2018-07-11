// HTTP (hypertext tranfer protocol)
// Request - What do we want to do
// Response - what was actually done


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('car parts', 2)

puzzleEl.textContent = game1.Puzzle
guessesEl.textContent = game1.StatusMessage


window.addEventListener('keypress', function (e){
   const guess =  String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.Puzzle
    guessesEl.textContent = game1.StatusMessage
    
})

// making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange' , (e)=>{
    if(e.target.readyState === 4){
        data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()