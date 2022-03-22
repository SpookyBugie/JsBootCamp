//  Lexical Scope (static scope)
// global scope - Definde outside of all code blocks
// local scope - Defined inside a code block

// In a scope tou can access variables defined in that scope, or in any parent/ancestor scope 

//Global Scope (varOne)
    //  Local scope (varTwo)
        // Local scope (varFour)
    // Local scope (varThree)



let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo ='varTwo'
    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}