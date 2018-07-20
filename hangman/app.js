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

    getPuzzle('2').then((puzzle)=>{
        console.log(puzzle)
    }).catch((err) => {
        console.log(`error: ${err}`)
    })


    // getCountry("SV").then((country) => {
    //         console.log(country.name)
    // }, (err) => {
    //         console.log(`Error: ${err}`)
    //     })



// fetch('http://puzzle.mead.io/puzzle', {}).then((response) =>{
//     if(response.status === 200){
//         return response.json()
//     }else{
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data)=>{
//     console.log(data.puzzle)
// }).catch((error)=>{
//     console.log(error)
// })