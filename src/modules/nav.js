const generateNav = (() => {
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
    const menu = document.createElement('div');
    menu.textContent = "Menu";
    const credits = document.createElement('div');
    credits.textContent = "Credits";

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(credits);

    return navBar;
  }

  return {
    generateHeading,
    generateNavBar
  }
})()

export default generateNav;