import { userAccount } from "./userAccount";

export class CompanyAccount extends userAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
  getloan = (value: number) => {
    if (this.isValid()) {
      console.log('successful loan')
      this.setBalance(value)
    }else{
      console.log("Opps, there's something wrong")
    }
  }
}