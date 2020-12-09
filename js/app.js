'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
// var seattle = document.getElementById('seattle');
// var tokyo = document.getElementById('tokyo');
// var dubai = document.getElementById('dubai');
// var paris = document.getElementById('paris');
// var lima = document.getElementById('lima');

var table = document.createElement('table');

console.log(table);
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailyTotal = 0;
  allStores.push(this);
}

Store.prototype.getrandomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calculateHourlySales = function () {
  // console.log(this.getrandomNumber());
  for (var i = 0; i < hours.length; i++) {
    var calcSalesRound = Math.ceil(this.getrandomNumber() * this.avg);
    this.hourlySales[i] = calcSalesRound;
    this.dailyTotal += calcSalesRound;
  }
};

Store.prototype.renderRow = function () {
  this.calculateHourlySales();
  var trElement = document.createElement('tr');
  table.appendChild(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContext = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
};

var seattleStore = new Store('Seattle', 23, 65, 6.3);
// var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
// var DubaiStore = new Store('Dubai', 11, 38, 37);
// var parisStore = new Store('Paris', 20, 38, 2.3);
// var limaStore = new Store('Lima', 2, 16, 4.6);

seattleStore.renderRow();
