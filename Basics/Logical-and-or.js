let temp = 165 

// logical AND operator (&&) - True only if both are sides are true. false otherwisse
// logical OR operator (||)- true if atleast one side is true. false otherwise
if (temp >= 60 && temp <= 90){
    console.log('it is nice out')
}

if( temp <= 0 || temp >= 120){
    console.log('Do Not go out')
}else {
    console.log('do what you want')
}

// CHALENGE

let isGuestOneVegan = false
let isGuestTwoVegan = false

// ARE BOTH VEGAN? ONLY OFFER UP VEGAN DISHES
// at least one vegan? make sure to offer some vegan options
// else, offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('only vegan glopp')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('some vegan glop')
}else {
    console.log('offer anything')
}