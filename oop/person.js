// prototypal inheritance 
// myPerson --> person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like)=>{
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
    }
    set fullName(fullName){
        const names = fullName.split(' ') // add space because setName needs to split at space between two names
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio(){
        return `${this.fullName} is a ${this.position}.`
        // Luis is a Student -> specific for employees
    }
    getYearsLeft(){
        return `Employee has ${65 - this.age} years left with company`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change){
       this.grade += change
    }
    getBio(){
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Employee('Luis', 'Pineda',30, 'Engineer', [])
me.fullName = 'Clancey Turner'
console.log(me.getBio())


// const me = new Employee('Luis', 'Pineda', 30, 'Student', ['Learning', 'Music'])
// me.setName('Alexis Turner')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('clancey', 'Turner', 35)
// console.log(person2.getBio())