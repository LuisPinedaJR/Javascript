// HTTP (hypertext tranfer protocol)
// Request - What do we want to do
// Response - what was actually done


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1


// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.StatusMessage


window.addEventListener('keypress', function (e){
   const guess =  String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render() 
})

const render = () => {
    puzzleEl.textContent = game1.Puzzle
    guessesEl.textContent = game1.StatusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)


startGame()

    // getPuzzle('2').then((puzzle)=>{
    //     console.log(puzzle)
    // }).catch((err) => {
    //     console.log(`error: ${err}`)
    // })

    // getCurrentCountry().then((country)=>{
    //     console.log(country)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // getLocation().then((location)=>{
    //     return getCountry(location.country)
    // }).then((country)=>{
    //     console.log(country)
    // }).catch((err)=>{
    //     console.log(`Error:${err}`)
    // }) 


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