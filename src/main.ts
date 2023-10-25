/* eslint-disable no-unused-expressions */
/* eslint-disable no-new */
import './scss/style.scss'
import { Header } from './components/header';
import { Footer } from './components/footer';
import { List } from './components/list';



function main () {
 
  new Header('#app');
  new List('#app');
  new Footer('#app');

}

main();
