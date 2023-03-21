interface ISavingAccount{
    acc_id:number;
 
    Balance:(balance:number,intrest?:number)=>void
    
}

interface ICurrentAccount{
    acc_id:number;
 
    Balance:(balance:number,intrest?:number)=>void
}

export class Account implements ISavingAccount,ICurrentAccount{
 public acc_id: number;
 public balance: number;
 public intrest?:number;
 constructor(acc_id:number,balance:number,intrest?:number){
    this.acc_id=acc_id;
    this.balance=balance;
    this.intrest=intrest;
 }
 Balance():void{
console.log("account_id:"+this.acc_id)
if (this.intrest == null){
 console.log("Current Balance:"+this.balance)   
}
else{
    console.log("Saving Balance:"+this.balance * this.intrest)
}
 }
}
let x=new Account(101,10000)
x.Balance();
let y=new Account(101,10000,4)
y.Balance();