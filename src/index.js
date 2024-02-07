// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
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
  // Add code
    const submitButton = document.querySelector("#submit-button");
  const handleSubmit = async () => {newRamen
    
  }
}


const displayRamens = () => {
  // Add code
fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => {
    const ramenMenuElement = document.getElementById('ramen-menu');

    ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen));
      ramenMenuElement.appendChild(img);
    });
  })
  
  .catch(error => console.error('Error fetching ramens:', error));
}

const main = () => {
  document.addEventListener('DOMContentLoaded',() => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
  const submitButton = document.querySelector("#submit-button");
  submitButton.addEventListener('click', async () => {
    await handleSubmit();
    const ramenMenuDivAfter = document.querySelectorAll('#ramen-menu img');
    const lastImg = ramenMenuDivAfter[ramenMenuDivAfter.length - 1];
    lastImg.addEventListener('click', (event) => {
      handleClick(ramenMenuDivAfter[ramenMenuDivAfter.length - 1].ramen);
    });
  });
});
  };

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
