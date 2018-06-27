// Arrow functions 
const square = (num) => num * num


console.log(square(5))

const squareLong = (num) => {
    return num * num
}

const people = [{
    name: 'Luis',
    age: 30
},{
    name: 'Keri',
    age: 30
},{
    name: 'Amber',
    age: 22
}]

// const under30 = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const age22 = people.filter((person)=> person.age <= 22)
console.log(age22)