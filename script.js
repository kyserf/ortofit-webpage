'use strict'

// vision ---------------------------------------

let navbar = document.querySelector('.header__navbar');
let testButton = document.querySelector('.header__button_test');
let serviceCard = document.querySelector('.services__slider_card--last');
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

  if (window.innerWidth > 1700) {
    serviceCard.style.display = 'block';
  } else {
    serviceCard.style.display = 'none'
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

if (window.innerWidth > 1700) {
  serviceCard.style.display = 'block';
} else {
  serviceCard.style.display = 'none'
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

// function checkWindowWidth() {
//   const windowWidth = window.innerWidth;

//   const img1200 = document.querySelector('.contacts_img--1200');
//   const img = document.querySelector('.contacts_img');

//   if (windowWidth < 1500) {
//       img.classList.remove('contacts_img');
//       img1200.classList.add('contacts_img--1200');
//   } else {
//       img1200.classList.remove('contacts_img--1200');
//       img.classList.add('contacts_img');
//   }
// }

// window.onload = checkWindowWidth;
// window.onresize = checkWindowWidth;
