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

getPuzzle((error, puzzle)=>{   // <------------------- callback pattern 2
    if(error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})


// making an HTTP request


// const countryCode = "US"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//        const countries = JSON.parse(e.target.responseText)
//        const country = countries.find((country)=> country.alpha2Code === countryCode)
//        console.log(country.name)
//     }else if(e.target.readyState === 4){
//         console.log('unable to find data')
//     }
    
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()