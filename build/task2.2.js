"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(acc_id, balance, intrest) {
        this.acc_id = acc_id;
        this.balance = balance;
        this.intrest = intrest;
    }
    Balance() {
        console.log("account_id:" + this.acc_id);
        if (this.intrest == null) {
            console.log("Current Balance:" + this.balance);
        }
        else {
            console.log("Saving Balance:" + this.balance * this.intrest);
        }
    }
}
exports.Account = Account;
let x = new Account(101, 10000);
x.Balance();
let y = new Account(101, 10000, 4);
y.Balance();
