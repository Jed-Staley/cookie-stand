const darkButtonSales = document.querySelector('#darkModeSales');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
let darkModeStatus = sessionStorage.getItem('darkModeStatus') === 'true';

function darkModeUpdate() {
  if (darkModeStatus) {
    darkButtonSales.textContent = 'Dark Mode: On';
    body.style.backgroundColor = '#3c3c3c';
    body.style.color = 'white';
    footer.style.backgroundColor = '#787878';
    for (let i = 0; i < 16; i++) {
      let ID = '#headerCell-' + i;
      const headerCell = document.querySelector(ID);
      headerCell.style.backgroundColor = '#787878';
    }
  } else {
    darkButtonSales.textContent = 'Dark Mode: Off';
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
  sessionStorage.setItem('darkModeStatus', darkModeStatus);
  darkModeUpdate();
}

darkModeUpdate();
darkButtonSales.onclick = function() {darkModeToggle();};
