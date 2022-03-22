// students score , total possiblr score 
// 15/20 --> you got a c (75%)
// A 90-100, B 80-89, C 70-79,  D 60-69, F 0-50

let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
         letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'c'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else if (percent <= 50) {
        letterGrade = 'F'
}
    // }       keep an eye on the (shift `)to make sure you put it in correctly
    return `You gots an ${letterGrade} (${percent})!`
    // the $ calls back to the variable you set
}


let result = gradeCalc(7, 20)
console.log(result)