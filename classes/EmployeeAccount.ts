import { userAccount } from "./userAccount"

export class EmployeeAccount extends userAccount{
  constructor(name:string, accountNumber: number){
    super(name, accountNumber)
  }
  deposit = (value:number): void => {
    if(this.isValid()){
      console.log('Deposit suceffuly')
      this.setBalance(value + 10)
    }else {
      console.log("Opps, there's something wrong")
    }
  }
}