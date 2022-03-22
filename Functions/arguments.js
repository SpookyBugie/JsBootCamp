// multi ple arguments
let add = function (a, b, c) {
    return a + b +c
}

let result = add(10, 1, 9)
console.log (result)

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0){
//    return 'Name: ' + name + '- Score ' + score
}
let scoreText= getScoreText(undefined , 99)
// by providing UNDEFINED you get access to 99
console.log(scoreText)

// CHALLENGE 
// TOTAL, TIPPERCENT .25 tip on $40 would be $10'

let getTip = function (total, tipPercent = .2) {
   let percent = tipPercent * 100
   let tip = total * tipPercent

   return `A ${percent}% tip on $${total} would be $${tip}`
}
// the .2 'TIP PERCENT' ABOVE is the DEFAULT VALUE, down below you can change it
let tip = getTip(40, .25)
console.log(tip)

// you just needed to multiply total and tipPercent
// the 'LET TIP ='  sets the total of the the bill


// let getTipPercent = function (total = 100, TipPercent = .2){
//     return 'Total ' + total * '= TipPercent' + TipPercent 
// }
// console.log(TipPercent)

console.log("andrew" + "mead")

let name = 'jen'
console.log ( `Hey my name is ${name}!`)