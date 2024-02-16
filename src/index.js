// index.js

// Callbacks
const handleClick = (ramen) => {
  const detailImage = document.querySelector('.detail-image');
  const nameElement = document.querySelector('.name');
  const restaurantElement = document.querySelector('.restaurant');
  const ratingDisplayElement = document.getElementById('rating-display');
  const commentDisplayElement = document.getElementById('comment-display');

  detailImage.alt = ramen.name;
  nameElement.textContent = ramen.name;
  restaurantElement.textContent = ramen.restaurant;
  ratingDisplayElement.textContent = ramen.rating;
  commentDisplayElement.textContent = ramen.comment;

  detailImage.src = ramen.image;
  

  };


const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newRamenName = document.querySelector("#new-name").value;
    const newRamenRestaurant = document.querySelector("#new-restaurant").value;
    const newRamenImage = document.querySelector("#new-image").value;
    const newRamenRating = document.querySelector("#new-rating").value;
    const newRamenComment = document.querySelector("#new-comment").value;

    const newRamen = {
      name: newRamenName,
      restaurant: newRamenRestaurant,
      image: newRamenImage,
      rating: newRamenRating,
      comment: newRamenComment,
    };

    const ramenMenuElement = document.getElementById('ramen-menu');

    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;

    img.addEventListener('click', () => handleClick(newRamen));

    ramenMenuElement.appendChild(img);

    form.reset();
  });
};



const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => {
      const ramenMenuElement = document.getElementById('ramen-menu');

    
      ramenMenuElement.innerHTML = '';

      ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenuElement.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching ramens:', error));
};

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    addSubmitListener();
  });
};

main();

// Export
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
