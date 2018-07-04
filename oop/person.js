// prototypal inheritance 

const Person = function (firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
Person.prototype.getBio = function(){
    return `${this.firstName} is ${this.age}`
}


const me = new Person('Luis', 'Pineda', 30)
console.log(me.getBio())

const person2 = new Person('clancey', 'Turner', 35)
console.log(person2.getBio())