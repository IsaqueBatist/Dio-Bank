import { CompanyAccount } from "./classes/CompanyAccount";
import { EmployeeAccount } from "./classes/EmployeeAccount";

//Company
const bersek = new CompanyAccount('BersekLTDA', 4302)
console.log(bersek)
bersek.deposit(100)
bersek.getAccountNumber()
bersek.getloan(1230)
console.log(bersek.name)
bersek.withdraw(300)
console.log(bersek)
//Employee
const isaque = new EmployeeAccount('Isaque', 3021)
console.log(isaque)
console.log(isaque.balance)
isaque.deposit(300)
console.log(isaque.getAccountNumber)
console.log(isaque.name)
isaque.withdraw(120)
console.log(isaque)
