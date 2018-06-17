let myBook = {
    title: '1984',
    author: 'Geroge Orwell',
    pageCount: 326

}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

/////
let person = {
    name: 'Luis',
    age: 30,
    location: 'Tampa'
}

console.log(`${person.name} is ${person.age} and lives is ${person.location}.`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives is ${person.location}.`)
