import { Component} from "./components";


export class Header extends Component {
  constructor(selector:string){
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  manageComponent(){

  }

  render() {
    super.render();
  }

  createTemplate() {
    return`
    <header>
      <h1>MY PETS</h1>
    </header>`;

  }
}
