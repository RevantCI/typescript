// 1. register a list container ul  in the constructor

import { HasFormatter } from "../interfaces/HasFormatter.js";

// 2. create a  render method to render a new li - accept args, (li, h4, p) add to the start or end of the list
export class ListTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
