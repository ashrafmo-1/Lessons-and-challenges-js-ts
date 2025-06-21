class BackAccount {
    constructor(accountNumber, ownerAccountName, initBalance= 0) {
        this.accountNumber = accountNumber;
        this.ownerAccountName = ownerAccountName;
        this.balance = initBalance;
        this.transactions = [];
    }

    // save all transactions
    // saveTransaction(type, amount) {
    //     this.transactions.push({
    //         type: type,
    //         amount: amount,
    //         date: new Date().toLocaleString(),
    //         balance: this.balance
    //     })
    // }
    
    // charge or deposit
    chargae(amount) {
        if(amount > 0)
        {
            this.balance+= amount;
            // this.saveTransaction("charge", amount);
            return `dont charging ${amount} you have ${this.balance} now <3`
        } else if (amount < 0)
        {
            return `must chrage amount minmum 5EGP`
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return 'you dont have any mony ya sha7at';
        } else if (amount < 0) {
            return `must chrage amount minmum 5EGP`
        } else {
            this.balance-= amount;
            // this.saveTransaction("withdraw", amount);
            return `you now withdraw ${amount} your Flos is ${this.balance}`
        }
    }


    checkBalance() {
        return `your Flos is ${this.balance}`
    }
}

const alexBankAcc = new BackAccount('SA123456', 'ashraf mohamed', 1000);

const showBalance = alexBankAcc.checkBalance();
const deposit5K = alexBankAcc.chargae(5000);


console.log(showBalance);
console.log(deposit5K);
console.log(alexBankAcc.withdraw(200));
console.log(alexBankAcc.withdraw(200));