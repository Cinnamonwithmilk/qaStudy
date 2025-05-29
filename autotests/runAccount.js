// runAccount.js
const Account = require("./account");

const account = new Account();
console.log("Начальный баланс:", account.balance); // 500
const newBalance = account.addFunds(100);
console.log("Новый баланс после добавления 100:", newBalance); // 600