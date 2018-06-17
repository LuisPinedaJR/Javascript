//

let num = 103.941

// removes or add numbers past the decimal point
console.log(num.toFixed(2))

//
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
// generate random number between 0-.9999 unless otherwise specified
console.log(Math.random(num))

let min = 1
let max = 20
let randomnum = Math.floor(Math.random() * (max - min + 1)) + min

let makeGuess = function(guess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}
console.log(makeGuess(1))
