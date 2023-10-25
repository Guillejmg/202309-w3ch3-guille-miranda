import { repo } from "../data/repo";
import { Component } from "./components";
import { Card } from "./card";
import { Pet } from "../model/pets";

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  manageComponent(){}

  render() {
    super.render();
    const elements = repo().map((item)=> new Card('ul',item as Pet));
    console.log(elements)
  }

  createTemplate() {
    return '<ul class="character-list row list-unstyled"></ul>';
  }
}
