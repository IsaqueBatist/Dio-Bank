import { userAccount } from "./userAccount"

export class EmployeeAccount extends userAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }
  deposit = (value: number): void => {
      console.log('Deposit suceffuly')
      this.balance += value
  }
}