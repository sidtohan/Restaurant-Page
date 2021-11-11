import generateNav from './modules/nav';
import generateHeroHome from './modules/hero-home';
import generateItemCard from './modules/hero-menu';

import './styles/style.css';
import './styles/nav.css'
import './styles/hero-home.css';
import './styles/hero-menu.css'

let current = "Home";

// Call the fucntions tab functions here, to add text content and stuff to
// these divs
const home = () => {
  // creating elements
  const hero = document.createElement('div');
  const nav = document.createElement('div');

  hero.id = "hero";
  nav.id = "nav";

  // nav
  nav.appendChild(generateNav.generateHeading());
  nav.appendChild(generateNav.generateNavBar());

  // hero 
  hero.appendChild(generateHeroHome.generateLeftPart());
  hero.appendChild(generateHeroHome.generateRightPart());


  // appending the requiured sections
  document.body.appendChild(nav);
  document.body.appendChild(hero);
}

const menu =  () => {
  const nav = document.createElement('div');
  const menuItems = document.createElement('div');

  menuItems.id = 'menu-items';
  nav.id = 'nav';
  nav.appendChild(generateNav.generateHeading());
  nav.appendChild(generateNav.generateNavBar());

  for(let i =0; i< 9; i++){
    menuItems.appendChild(generateItemCard());
  }

  document.body.appendChild(nav);
  document.body.appendChild(menuItems);

}

const tabClicks = () => {
  const tabs = nav.querySelector('.nav-links').children;
  for (let tab of tabs) {
    tab.addEventListener('click', e => {
      let clicked = e.target.textContent;
      if (clicked === current) {
        // do nothing
        return;
      }

      if (clicked === 'Home') {
        document.body.innerHTML = '';
        home();

      } else if (clicked === "Menu") {
        document.body.innerHTML = '';
        menu();
  
      } else {
        console.log("Credits");
      }
      tabClicks();
      current = clicked;
    })
  }
}

// generate homepage by default
window.onload = home();
window.onload = tabClicks();