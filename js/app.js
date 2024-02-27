'use strict';

function addStore(htmlID, minTraffic, maxTraffic, avrgOrderSize) {
  // creates an object literal for a single store when given its parent element ID, minimum hourly customers (minTrafic),
  // maximum hourly customers (maxTraffic), and the average number of cookies per order (avrgOrderSize)
  let storeObject = {
    ID: htmlID,
    minTraf: minTraffic,
    maxTraf: maxTraffic,
    orderSize: avrgOrderSize
  };

  // simulates the sales data for the store and stores it by the hour as an array in a new property "simSales" of the store object
  let range = (storeObject.maxTraf - storeObject.minTraf) + 1;
  let hours = [];
  let total = 0;
  for (let i = 0; i < 14; i++) {
    hours.push(Math.ceil(storeObject.orderSize * Math.floor((range * Math.random()) + storeObject.minTraf)));
    total += hours[i];
  }
  hours.push(total);
  storeObject.simSales = hours;

  // renders the data for the store
  for (let i = 0; i < 15; i++) {
    const unorderedList = document.getElementById(storeObject.ID);
    const newElement = document.createElement('li');
    let hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '];
    newElement.textContent = hours[i] + storeObject.simSales[i] + ' cookies';
    unorderedList.appendChild(newElement);
  }
}

// loads the simulated sales for the stores
function loadSalesPage() {
  addStore('seattle', 23, 65, 6.3);
  addStore('tokyo', 3, 24, 1.2);
  addStore('dubai', 11, 38, 3.7);
  addStore('paris', 20, 38, 2.3);
  addStore('lima', 2, 16, 4.6);
}

loadSalesPage();
