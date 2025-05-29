// account.js
class Account {
    constructor() {
        this.balance = 500; // Начальный баланс
    }

    addFunds(amount) {
        this.balance += amount;
        return this.balance;
    }
}

module.exports = Account;