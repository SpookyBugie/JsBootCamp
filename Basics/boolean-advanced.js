let isAccountLocked = false
let userRole = 'user'
// if (isAccountlocked){
//     console.log('Is account locked')
// } else {
//     console.log('Welcome')
// }

if (isAccountLocked) {
    console.log('Is the account locked')
} else if (userRole  === 'admin'){
    console.log('Welcome admin')
} else{
    console.log('Welcome')
}

// CHALLENGE

let temp = 999

if(temp <= 32 ){
    console.log('It is freezing outside')
} else if(temp >= 70 ){
    console.log(' It is hot outside')
}else {
    console.log('Go for it. It is pretty nice.')
}

// It is freezing outside! 

// It is hot outside!

// Go for it. iIt is pretty nice. 