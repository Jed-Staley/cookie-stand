'use strict';

// creates an object literal for a single store when given its minimum hourly customers (minTrafic),
// maximum hourly customers (maxTraffic), and the average number of cookies per order (avrgOrderSize)
function createNewStore(minTraffic, maxTraffic, avrgOrderSize) {
  return {
    minTraf: minTraffic,
    maxTraf: maxTraffic,
    orderSize: avrgOrderSize
  };
}

// simulates the sales data for a single store
function simulate(storeData) {
  let range = (storeData.maxTraf - storeData.minTraf) + 1;
  let hours = [];
  let total = 0;
  for (let i = 0; i < 14; i++) {
    hours.push(Math.ceil(storeData.orderSize * Math.floor((range * Math.random()) + storeData.minTraf)));
    total += hours[i];
  }
  hours.push(total);
  storeData.simSales = hours;
}

function addNewLine(storeName, lineNumber, htmlId) {
  const unorderedList = document.getElementById(htmlId);
  const newElement = document.createElement('li');
  let hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '];
  newElement.textContent = hours[lineNumber] + storeName.simSales[lineNumber] + ' cookies';
  unorderedList.appendChild(newElement);
}

function addLinesForStore(storeName, htmlId) {
  for (let i = 0; i < 15; i++) {
    addNewLine(storeName, i, htmlId);
  }
}

// loads the simulated sales for the stores
function loadSalesPage() {
  let seattle = createNewStore(23, 65, 6.3);
  let tokyo = createNewStore(3, 24, 1.2);
  let dubai = createNewStore(11, 38, 3.7);
  let paris = createNewStore(20, 38, 2.3);
  let lima = createNewStore(2, 16, 4.6);
  simulate(seattle);
  simulate(tokyo);
  simulate(dubai);
  simulate(paris);
  simulate(lima);
  addLinesForStore(seattle, 'seattle');
  addLinesForStore(tokyo, 'tokyo');
  addLinesForStore(dubai, 'dubai');
  addLinesForStore(paris, 'paris');
  addLinesForStore(lima, 'lima');
}

loadSalesPage();
