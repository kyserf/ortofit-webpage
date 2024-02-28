'use strict'

// vision ---------------------------------------

let navbar = document.querySelector('.header__navbar');
let videoBlockButton = document.querySelector('.learnMoreButton--videoBlock');

window.addEventListener('resize', function() {
  if (window.innerWidth > 1600) {
    navbar.style.display = 'flex';
    testButton.style.display = 'none';
  } else {
    navbar.style.display = 'none';
    testButton.style.display = 'block';
  }

  if (window.innerWidth > 1430) {
    videoBlockButton.style.display = 'block';
  } else {
    videoBlockButton.style.display = 'none'
  }

  if (window.innerWidth > 1570) {
    feedbackCard.style.display = 'flex';
  } else {
    feedbackCard.style.display = 'none'
  }
});


if (window.innerWidth > 1430) {
  videoBlockButton.style.display = 'block';
} else {
  videoBlockButton.style.display = 'none'
}

const popupButtons = document.querySelectorAll('.popupButton');

console.log(popupButtons);

popupButtons.forEach(function(button) {
  button.addEventListener('click', showPopup);
});

document.getElementById('popupCloseButton').addEventListener('click', closePopup);

function showPopup() {
  document.getElementById('popup').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.querySelector('.header__info_search_icon');
  const searchInputWrapper = document.querySelector('.header__info_search_input_wrapper');

  searchIcon.addEventListener('click', function() {
    searchInputWrapper.classList.toggle('active');
    if (searchInputWrapper.classList.contains('active')) {
      searchInputWrapper.focus();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const closeButton = document.getElementById('closeButton');
  const heroRemarkFull = document.querySelector('.hero__remark_full');

  toggleButton.addEventListener('click', function() {
    heroRemarkFull.style.display = (heroRemarkFull.style.display === 'none' || heroRemarkFull.style.display === '') ? 'block' : 'none';
    
    toggleButton.style.display = (heroRemarkFull.style.display === 'block') ? 'none' : 'flex';
    closeButton.style.display = (heroRemarkFull.style.display === 'block') ? 'flex' : 'none';
  });

  closeButton.addEventListener('click', function() {
    heroRemarkFull.style.display = 'none';

    toggleButton.style.display = 'flex';
    closeButton.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const listOfServicesWrapper = document.querySelector('.servicesSection__listOfServices_wrapper');
  const cards = document.querySelectorAll('.servicesSection__listOfServices_card');

  function updateCards() {
    const screenWidth = window.innerWidth;
    const maxCardsToShow = (screenWidth <= 1260) ? 3 : cards.length;

    cards.forEach((card, index) => {
      if (index < maxCardsToShow) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  updateCards();
  window.addEventListener('resize', updateCards);
});

