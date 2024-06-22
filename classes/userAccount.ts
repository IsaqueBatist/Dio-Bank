export abstract class userAccount {
  name: string
  accountNumber: number
  private valid: boolean = true
  private balance: number = 0

  constructor(name:string, accountNumber:number){
    this.name = name
    this.accountNumber = accountNumber
  }
  setName = (newName:string): void => {
    this.name = newName
  }
  getName = (): void => {
    console.log(this.name)
  }
  setBalance = (value:number):void => {
    this.balance += value
  }
  getBalance = (): void => {
    console.log(this.balance)
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
      this.setBalance(value)
    }else {
      console.log("Opps, there's something wrong")
    }
  }
  withdraw = (value:number): void => {
    if(this.isValid() && this.balance > value){
      console.log("Suceffull Whitdraw")
      this.setBalance(value)
    }else {
      console.log("Opps, there's something wrong")
    }
  }
}