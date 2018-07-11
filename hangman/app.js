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
// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange' , (e)=>{
//     if(e.target.readyState === 4 && e.target.status === 200){
//         data = JSON.parse(e.target.responseText)
//         console.log(data)
//     }else if(e.target.readyState === 4){
//         console.log('And error has taken place')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// request.send()

const countryCode = "US"
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200){
       const countries = JSON.parse(e.target.responseText)
       const country = countries.find((country)=> country.alpha2Code === countryCode)
       console.log(country.name)
    }else if(e.target.readyState === 4){
        console.log('unable to find data')
    }
    
        
        
    
    
})

request.open('GET', 'http://restcountries.eu/rest/v2/all')
request.send()