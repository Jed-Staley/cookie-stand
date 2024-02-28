const darkButton = document.querySelector('#darkMode');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
let darkModeStatus = false;

function darkModeUpdate() {
  if (darkModeStatus) {
    darkButton.textContent = 'Dark Mode: On';
    body.style.backgroundColor = '#3c3c3c';
    body.style.color = 'white';
    footer.style.backgroundColor = '#787878';
    for (let i = 0; i < 16; i++) {
      let ID = '#headerCell-' + i;
      const headerCell = document.querySelector(ID);
      headerCell.style.backgroundColor = '#787878';
    }
  } else {
    darkButton.textContent = 'Dark Mode: Off';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    footer.style.backgroundColor = '#ccc';
    for (let i = 0; i < 16; i++) {
      let ID = '#headerCell-' + i;
      const headerCell = document.querySelector(ID);
      headerCell.style.backgroundColor = '#ccc';
    }
  }
}

function darkModeToggle() {
  darkModeStatus = !darkModeStatus;
  darkModeUpdate();
}

darkButton.onclick = function() {darkModeToggle();};
