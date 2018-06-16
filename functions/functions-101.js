// function - input(argument), code, output(return value)

let greetUser = function(){
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// coverting farenheit to celsius
let convertFahrenheitToCelsius = function(farenheit){
    let result = (farenheit - 32) * (5/ 9)
    return result
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
