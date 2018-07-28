const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
   const guess =  String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render() 
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.StatusMessage

    game1.Puzzle.split('').forEach((letter)=>{
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
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