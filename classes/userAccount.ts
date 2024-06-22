export abstract class userAccount {
  readonly name: string
  private readonly accountNumber: number
  private valid: boolean = true
  balance: number = 0

  constructor(name:string, accountNumber:number){
    this.name = name
    this.accountNumber = accountNumber
  }
  getAccountNumber= ():void => {
    console.log(this.accountNumber)
  }
  private isValid = (): boolean => {
    if(this.valid){
      return this.valid
    }else {
      throw new Error()
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
      console.log("Suceffull Whitdraw")
      this.balance += value
    }else {
      console.log("Opps, there's something wrong")
    }
  }
}