import { HasFormatter } from "../interfaces/HasFormatter.js";

// Export the HTML template for the list items

export class ListTemplate {

  // The HTML lu will be the container
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
    const li = document.createElement('li')

    const h4 = document.createElement('h4')
    h4.innerText = heading
    li.append(h4)

    const p = document.createElement('p')
    p.innerText = item.format()
    li.append(p)

    if(pos === 'start') {
      this.container.prepend(li)
    } else {
      this.container.append(li)
    }
  }
}