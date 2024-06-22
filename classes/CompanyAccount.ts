import { userAccount } from "./userAccount"

export class CompanyAccount extends userAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
  getloan = (value: number) => {
    console.log('successful loan')
    this.balance += value
  }
}