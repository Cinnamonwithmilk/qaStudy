// account.test.js
const Account = require("./account");

describe("Account addFunds", () => {
    test("should increase balance by 100 when amount is 100", () => {
        const account = new Account();
        const initialBalance = account.balance; // 500
        const newBalance = account.addFunds(100);
        expect(newBalance).toBe(initialBalance + 100); // 600
    });
});