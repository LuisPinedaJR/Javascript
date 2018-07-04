// prototypal inheritance 

const Person = function (firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}



const me = new Person('Luis', 'Pineda', 30)
console.log(me)

const person2 = new Person('clancey', 'Turner', 35)
console.log(person2)