import { HasFormatter } from '../interfaces/HasFormatter'

export class Payment implements HasFormatter {
  constructor(
    private recipient: string,
    private details: string,
    public amount: number
    ) {}

  format() {
    return `${this.recipient} is owed SEK${this.amount} for ${this.details}`
  }
}