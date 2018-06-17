// Const cannot be reassigned like 'let'

const person = {
    age: 27
}
// this is valid becuase we are only changing a property of object
person.age = 28

// this is not valid, we cannot change object
person = {}

console.log(person)