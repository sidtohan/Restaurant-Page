const generateItemCard = (() => {
  const card = document.createElement('div');
  card.classList.add('menu-item');


  const generateCardHeading = () => {
    const div = document.createElement('div');
    div.classList.add('card-heading');
    div.textContent = "Lorem Food";
    return div;
  }

  const generateCardContent = () => {
    const div = document.createElement('div');
    div.classList.add('card-content');
    div.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus condimentum neque, in congue diam malesuada et. Fusce vel rhoncus justo. Maecenas laoreet turpis et nisl egestas varius. Aliquam malesuada nisl et libero sodales, sit amet maximus mauris tristique."
    return div;
  }
  
  card.appendChild(generateCardHeading());
  card.appendChild(generateCardContent());
  return card;
});

export default generateItemCard;