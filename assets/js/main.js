//main.js


//navbar.js
const navbar = document.querySelector('.navbar');
const offset = navbar.offsetTop + navbar.offsetHeight;
let lastScrollTop = 0;

const mainContainer = document.querySelector('main');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop >= offset) {
    navbar.classList.add('sticky');
    mainContainer.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    navbar.classList.remove('sticky');
    mainContainer.style.paddingTop = 0;
  }
  if (scrollTop > lastScrollTop && scrollTop > 0) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  lastScrollTop = scrollTop;
});




//load.js
window.addEventListener('load', () => {
  document.documentElement.classList.add('loaded');
});


//audio.js
const soundButton = document.getElementById('soundButton');
const soundtrack = document.getElementById('soundtrack');

soundButton.addEventListener('click', () => {
    if (soundtrack.paused) {
        soundtrack.play();
        soundButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        soundtrack.pause();
        //soundtrack.currentTime = 0;
        soundButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});
