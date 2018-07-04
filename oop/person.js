// prototypal inheritance 

const Person = function (firstName, lastName, age, likes = []){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like)=>{
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function (fullName){
    const names = fullName.split(' ') // add space because setName needs to split at space between two names
    this.firstName = names[0]
    this.lastName = names[1]
}   


const me = new Person('Luis', 'Pineda', 30, ['Learning', 'Music'])
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('clancey', 'Turner', 35)
console.log(person2.getBio())