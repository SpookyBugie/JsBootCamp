//  Undefined for variable

let name 
// vareiable is declared but not value assainged  to it

if (name === undefined){
    console.log('Please provide a name')
}else {
    console.log (name)
}

// Undefined for function arguments
// Undefined as function return default value
let square = function (num){
    console.log(num)
}
let result = square()
console.log(result)


// null as assined value
let age = 27 

age = null
// to set to undefined 

console.log(age)