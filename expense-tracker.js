const account = {
    name: "Luis Pineda",
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense){
            totalExpenses =  totalExpenses + expense.amount
        
        })
        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
            
        })
        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
      
    }
}



// Expense -> description, amount
// addexpense -> description, amount
// getAccountSummary - total up all expenses -> 'Luis Pineda has $1250 in expenses.'

// 1. add income array to acount
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary
// Luis Pineda has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 950)
account.addExpense('coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())