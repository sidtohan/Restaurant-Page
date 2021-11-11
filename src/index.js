import generateNav from './modules/nav';
import generateHero from './modules/hero-home';
import './styles/style.css';
import './styles/nav.css'
import './styles/hero.css';
import { cli } from 'webpack';

const hero = document.createElement('div');
const nav = document.createElement('div');
const footer = document.createElement('div');

let current = "Home";

hero.id = "hero";
nav.id = "nav";
footer.id = "footer";

// Call the fucntions tab functions here, to add text content and stuff to
// these divs
const home = () => {
  // nav
  nav.appendChild(generateNav.generateHeading());
  nav.appendChild(generateNav.generateNavBar());
  const tabs = nav.querySelector('.nav-links').children;
  for (let tab of tabs) {
    tab.addEventListener('click', e => {
      let clicked  = e.target.textContent;
      if(clicked === current){
        // do nothing
        return;
      }
      if(clicked === 'Home'){
        home();
      } else if (clicked === "Menu"){
        console.log("menu");
      } else{
        console.log("Credits");
      }
      e.stopPropagation();
    })
  }

  // hero 
  hero.appendChild(generateHero.generateLeftPart());
  hero.appendChild(generateHero.generateRightPart());
}

home();

document.body.appendChild(nav);
document.body.appendChild(hero);
document.body.appendChild(footer)