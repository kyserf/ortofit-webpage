'use strict'

// vision ---------------------------------------

let navbar = document.querySelector('.header__navbar');
let testButton = document.querySelector('.header__button_test');
let videoBlockButton = document.querySelector('.learnMoreButton--videoBlock');
let feedbackCard = document.querySelector('.feedback__body_card--last');

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