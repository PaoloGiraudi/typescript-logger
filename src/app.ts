import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement

// Select all the inputs

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// Select the ul and use it as container for the list items
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event)=> {
  e.preventDefault()

  // Make sure that the doc has the format() method
  let doc: HasFormatter 

  if(type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')
})