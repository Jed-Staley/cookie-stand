const darkButtonHome = document.querySelector('#darkModeHome');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
let darkModeStatus = sessionStorage.getItem('darkModeStatus') === 'true';

function darkModeUpdate() {
  if (darkModeStatus) {
    darkButtonHome.textContent = 'Dark Mode: On';
    body.style.backgroundColor = '#3c3c3c';
    body.style.color = 'white';
    footer.style.backgroundColor = '#787878';
  } else {
    darkButtonHome.textContent = 'Dark Mode: Off';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    footer.style.backgroundColor = '#ccc';
  }
}

function darkModeToggle() {
  darkModeStatus = !darkModeStatus;
  sessionStorage.setItem('darkModeStatus', darkModeStatus);
  darkModeUpdate();
}

darkModeUpdate();
darkButtonHome.onclick = function() {darkModeToggle();};
