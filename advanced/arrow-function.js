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
    age: 28
}]

const under30 = people.filter(function(person){
    return person.age < 30
})
console.log(under30)