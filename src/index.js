import generateNav from './modules/nav';
import generateHero from './modules/hero-home';
import './styles/style.css';
import './styles/nav.css'
import './styles/hero.css';

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
  hero.appendChild(generateHero.generateLeftPart());
  hero.appendChild(generateHero.generateRightPart());


  // appending the requiured sections
  document.body.appendChild(nav);
  document.body.appendChild(hero);
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
        tabClicks();
        return;

      } else if (clicked === "Menu") {
        console.log("Menu");
        current = clicked;
        return;
      } else {
        console.log("Credits");
        current = clicked;
        return;
      }
    })
  }
}

// generate homepage by default
window.onload = home();
window.onload = tabClicks();