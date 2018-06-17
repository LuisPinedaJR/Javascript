// multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('undefined', 99)
console.log(scoreText)

// tiping calculator
let getTip = function(total, tipPercent = .2) {
    let percentage = tipPercent * 100
    let tip = total * tipPercent
    return `a ${percentage}% tip on a $${total} would be $${tip}`
    
}

let tip = getTip(60, .2)
console.log(tip)

