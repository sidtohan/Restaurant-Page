import generateNav from './modules/nav';
import generateHeroHome from './modules/hero-home';
import generateItemCard from './modules/hero-menu';

import './styles/style.css';
import './styles/nav.css'
import './styles/hero-home.css';
import './styles/hero-menu.css'

let current = "home";
// Call the fucntions tab functions here, to add text content and stuff to
// these divs
const home = () => {
  // hero
  const hero = document.createElement('div');
  hero.appendChild(generateHeroHome.generateLeftPart());
  hero.appendChild(generateHeroHome.generateRightPart());
  hero.id = "hero";
  document.body.appendChild(hero);
}

const menu = () => {
  const menuItems = document.createElement('div');
  menuItems.id = 'menu-items';

  for (let i = 0; i < 9; i++) {
    menuItems.appendChild(generateItemCard());
  }

  document.body.appendChild(menuItems);

}

const tabClicks = () => {
  const tabs = nav.querySelector('.nav-links').children;
  for (let tab of tabs) {
    tab.addEventListener('click', e => {
      let clicked = e.target.classList[0];
      if (clicked === current) {
        // do nothing
        return;
      }
      if (clicked === 'home') {
        document.body.removeChild(document.body.children[2]);
        home();

      } else if (clicked === "menu") {
        document.body.removeChild(document.body.children[2]);
        menu();

      } else {
        console.log("credits");
      }
      current = clicked;

      return;
    })
  }
}

// this generates navbar, only once in the beginning
const appendNav = () => {
  const nav = document.createElement('div');
  nav.id = "nav";
  nav.appendChild(generateNav.generateHeading());
  nav.appendChild(generateNav.generateNavBar());
  document.body.appendChild(nav);

  return;
}

appendNav();
// generate homepage by default
window.onload = home();
window.onload = tabClicks();