import { HasFormatter } from '../interfaces/HasFormatter'

export class Invoice implements HasFormatter {
  constructor(
    private client: string,
    private details: string,
    public amount: number
    ) {}

  format() {
    return `${this.client} owes SEK${this.amount} for ${this.details}`
  }
}