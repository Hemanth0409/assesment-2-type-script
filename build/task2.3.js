"use strict";
class Customer {
    constructor(CustomerName, Age, ContactNumber, Address) {
        this.CustomerName = CustomerName;
        this.Age = Age;
        this.ContactNumber = ContactNumber;
        this.Address = Address;
    }
}
class Loan extends Customer {
    constructor(CustomerName, Age, ContactNumber, Address, LoanAccountNo, LoanType, LoanAmount, Duration, InterestRate) {
        super(CustomerName, Age, ContactNumber, Address);
        this.LoanAccountNo = LoanAccountNo;
        this.LoanType = LoanType;
        this.LoanAmount = LoanAmount;
        this.Duration = Duration;
        this.InterestRate = InterestRate;
    }
    AccessDetails() {
        console.log("Customer Name:" + this.CustomerName + "\n" + "Age:" + this.Age + '\n' + "Contact Number:" + this.ContactNumber + '\n' + "Address:" + this.Address);
        console.log("LoanAccountNo" + this.LoanAccountNo + '\n' + "LoanType:" + this.LoanType + '\n' + "LoanAmount:" + this.LoanAmount + '\n' + "Duration:" + this.Duration + '\n' + "IntrestRate:" + this.InterestRate);
    }
    InterestCalculate() {
        console.log("Interest and the total amount to be paid:" + (this.LoanAmount * this.Duration * this.InterestRate) / 100);
    }
    display() {
        console.log("LOAD DEATILS");
        this.AccessDetails();
        this.InterestCalculate();
    }
}
let x = new Loan("Hemanth", 28, 9876543210, "nsn palayam", 101, "personal loan", 100000, 20, 0.4);
x.display();
