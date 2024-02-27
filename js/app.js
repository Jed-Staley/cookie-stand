'use strict';

// creates a new Store object with the provided data
function Store(htmlID, minTraffic, maxTraffic, avrgOrderSize) {
  this.ID = htmlID;
  this.minTraf = minTraffic;
  this.maxTraf = maxTraffic;
  this.orderSize = avrgOrderSize;
}

// simulates the sales data for the store and stores it by the hour as an array in a new property "simSales" of the store object
Store.prototype.simulateSales = function () {
  let range = (this.maxTraf - this.minTraf) + 1;
  let name = this.ID.charAt(0).toUpperCase() + this.ID.slice(1);
  let hourSales = [name];
  let total = 0;
  for (let i = 1; i < 15; i++) {
    hourSales.push(Math.ceil(this.orderSize * Math.floor((range * Math.random()) + this.minTraf)));
    total += hourSales[i];
  }
  hourSales.push(total);
  this.simSales = hourSales;
};

// creates table header
function createTableHeader() {
  // creates header row
  const table = document.getElementById('table');
  const newRow = document.createElement('tr');
  newRow.id = 'tableHeaderRow';
  table.appendChild(newRow);

  // creates header cells
  let hours = ['Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];
  const headerRow = document.getElementById('tableHeaderRow');
  for (let i = 0; i < 16; i++) {
    const newHeaderCell = document.createElement('th');
    newHeaderCell.innerText = hours[i];
    headerRow.appendChild(newHeaderCell);
  }
}

// renders the data for the store to the page
let totals = ['All Combined', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Store.prototype.renderData = function () {
  // creates row with custom ID
  const table = document.getElementById('table');
  const newRow = document.createElement('tr');
  newRow.id = 'tableStoreRow';
  table.appendChild(newRow);

  // creates cells in row
  for (let i = 0; i < 16; i++) {
    const storeRow = document.getElementById('tableStoreRow');
    const newCell = document.createElement('td');
    newCell.innerText = this.simSales[i];
    storeRow.appendChild(newCell);
    if (i !== 0) {
      totals[i] += this.simSales[i];
    }
  }

  // resets the row's ID so that the next row can use the same ID
  newRow.id = null;
};

// creates table footer
function createTableFooter() {
  // creates footer row
  const table = document.getElementById('table');
  const newRow = document.createElement('tr');
  newRow.id = 'tableFooterRow';
  table.appendChild(newRow);

  // creates footer cells
  const footerRow = document.getElementById('tableFooterRow');
  for (let i = 0; i < 16; i++) {
    const newFooterCell = document.createElement('td');
    newFooterCell.innerText = totals[i];
    footerRow.appendChild(newFooterCell);
  }
}
// loads the stores and renders their simulated sales to the page
function loadSalesPage() {
  // creates store objects
  let seattle = new Store('seattle', 23, 65, 6.3);
  let tokyo = new Store('tokyo', 3, 24, 1.2);
  let dubai = new Store('dubai', 11, 38, 3.7);
  let paris = new Store('paris', 20, 38, 2.3);
  let lima = new Store('lima', 2, 16, 4.6);

  // creates sales data for each store
  seattle.simulateSales();
  tokyo.simulateSales();
  dubai.simulateSales();
  paris.simulateSales();
  lima.simulateSales();

  // renders sales data to page
  createTableHeader();
  seattle.renderData();
  tokyo.renderData();
  dubai.renderData();
  paris.renderData();
  lima.renderData();
  createTableFooter();
}

loadSalesPage();
