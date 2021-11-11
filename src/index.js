import generateNav from './nav'
import './style.css'

const hero = document.createElement('div');
const nav = document.createElement('div');
const footer = document.createElement('div');

hero.id = "hero";
nav.id = "nav";
footer.id = "footer";

// Call the fucntions tab functions here, to add text content and stuff to
// these divs
const homePage = () => {
  nav.appendChild(generateNav.generateHeading());
  nav.appendChild(generateNav.generateNavBar());
}

homePage();
document.body.appendChild(nav);
document.body.appendChild(hero);
document.body.appendChild(footer)