let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = `Animal Farm`

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge 

// name,age,location
// Andrew is 27 and lives in Philidelphia
// increase age by 1 and print message

let person = {
    name: `Andrew`,
    location: `Philidelphia`,
    age: 27 
}
console.log (`${person.name} is ${person.age} and lives in ${person.location}`)
// ACCESS THE OBJECT FIRST, HERE IS *PERSON* THEN PICK THE PREPORTY LIKE *NAME* 

person.age= person.age + 1
console.log (`${person.name} is ${person.age} and lives in ${person.location}`)