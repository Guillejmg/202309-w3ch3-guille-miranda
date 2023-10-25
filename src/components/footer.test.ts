
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { Footer } from './footer';


describe ('given footer component',()=>{
 describe ('when we instate it', ()=>{
	  document.body.innerHTML='<div></div>';
    const footer =new Footer('div');
    test('then it should be instance of footer', () => {
      expect(footer.element).toBeInstanceOf(HTMLElement)
		 });
      test('then it should be in the text', () => {
        const element = screen.getByText(/ISDI Pets/i);
        expect(element).toBeInTheDocument();
		 });
 });
});
