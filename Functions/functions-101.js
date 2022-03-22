//  Functions - input, code , output (return value)

let greetUser = function(){
   console.log( 'welcome user') 
}

greetUser ()
greetUser ()
greetUser ()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// CHALANGE!!

// CONVERT FARENHEIT INTO CELSUIS
let convertFahrenheitToCelcius = function (fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9
    // taken from previous temp conversion you made
    return celcius 
}
// CALL A COUPLE OF TIME (21 -> 0) (68 ->20)
let tempOne = convertFahrenheitToCelcius(32)

let tempTwo = convertFahrenheitToCelcius(68)

// PRINT THE CONVERTED VALUES

console.log(tempOne)
console.log(tempTwo)
