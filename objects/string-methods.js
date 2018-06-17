let name = ' Luis Pineda '

// length property
console.log(name.length)

// Covnvert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())


// Search for or 'Includes method'
let password = 'abc123password098'
console.log(password.includes('def')) // false
console.log(password.includes('abc')) // true

// Trim
console.log(name.trim())

/////////////// must be 8 in character in length and MUST NOT contain word password

/// one way of cheking
let isValidPassword = function(password){
   if(password.length < 8 || password.includes('password')){
        return false
   }else{
        return true
    }  
}
console.log(isValidPassword('asdf')) // false
console.log(isValidPassword('asdfasdfg')) // true
console.log(isValidPassword('asdfasdfgpassword')) // false

//// second way of checking

let validPassword = function(password){
    return password.length > 8 && !password.includes('password')
}
console.log(validPassword('asdf')) // false
console.log(validPassword('asdfasdfg')) // true
console.log(validPassword('asdfasdfgpassword')) // false

