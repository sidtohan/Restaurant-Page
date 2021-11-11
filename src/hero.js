import KnifeFork from './knife-fork.svg'
import HeroImage from './hero-logo.png'

const generateHero = (() => {
  const generateLeftPart = () => {

    const leftPart = document.createElement('div');
    leftPart.classList.add('left-part-hero');

    const subTitle = document.createElement('div');
    subTitle.textContent = "The Top Restaurant in XYZ City";
    subTitle.classList.add('sub-title');

    const title = document.createElement('div');
    title.textContent = "We are the ultimate food hub for foodies and critics alike";
    title.classList.add('title') ;

    const letsEat = document.createElement('button');
    letsEat.classList.add('lets-eat');

    const letsEatText = document.createElement('div');
    letsEatText.classList.add('lets-eat-text');
    letsEatText.textContent = "Lets Eat";

    const knifeFork = document.createElement('img');
    knifeFork.classList.add('knife-fork');
    knifeFork.src = KnifeFork;

    letsEat.appendChild(letsEatText);
    letsEat.appendChild(knifeFork);

    leftPart.appendChild(subTitle);
    leftPart.appendChild(title);
    leftPart.appendChild(letsEat);

    return leftPart;
  }

  const generateRightPart = () => {
    const logo = new Image();
    logo.src = HeroImage;
    logo.classList.add('hero-logo');
    return logo;
  }
  return {
    generateLeftPart,
    generateRightPart
  }
})()

export default generateHero;

