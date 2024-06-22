export abstract class userAccount {
  name: string
  accountNumber: number
  private valid: boolean = true
  private balance: number = 0

  constructor(name:string, accountNumber:number){
    this.name = name
    this.accountNumber = accountNumber
  }

  isValid = (): boolean => {
    if(this.valid){
      return this.valid
    }else {
      throw Error()
    }
  }

  deposit = (value:number):void => {
    if(this.isValid()){
      console.log('Deposit suceffuly')
      this.balance += value
    }else {
      console.log("Opps, there's something wrong")
    }
  }
  withdraw = (value:number): void => {
    if(this.isValid() && this.balance > value){
      console.log("Whitdraw suceffulu")
      this.balance -= value
    }
  }
}