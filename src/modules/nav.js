const generateNav = (() => {

  const generateHamBurger = () => {
    const button = document.createElement('button');
    button.classList.add("hamburger");
    return button;
  }

  const generateHeading = () => {
    const heading = document.createElement('div');
    heading.textContent = "Odin Restaurant";
    heading.classList.add('main-heading');
    return heading;
  }

  const generateNavBar = () => {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-links');
    
    const home = document.createElement('div');
    home.textContent = "Home";
    home.classList.add("home");
    home.classList.add('nav-item');

    const menu = document.createElement('div');
    menu.textContent = "Menu";
    menu.classList.add("menu");
    menu.classList.add('nav-item');

    const credits = document.createElement('div');
    credits.textContent = "Credits";
    credits.classList.add("credits");
    credits.classList.add('nav-item');

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(credits);

    return navBar;
  }

  return {
    generateHeading,
    generateNavBar,
    generateHamBurger
  }
})()

export default generateNav;