let myAccount = {
    name: 'Victor Figueroa',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function(account, income) {
    account.income = account.income +income
}

// Challange 
//  RESET ACCOUNT EXPENSES (resetAccount)
let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0

}
// PRINT ACCOUNT BALANCE SUMMARY (myAccounSummary)
// Account for Victor has $900. $1000 in income. $100 in expensees.
let myAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.addExpense} in income. $${account.expenses} in expenses `
}


// add Income
// addExpense
// addExpense

addIncome(myAccount, 1000)
addExpense(myAccount,100)
addExpense(myAccount, 120)

// getAccountSummary
// resetAccount
// getAccountSummary
console.log(myAccountSummary(myAccount))
resetAccount(myAccount)
console.log(myAccountSummary(myAccount))


