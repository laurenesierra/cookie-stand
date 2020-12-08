'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = document.getElementById('seattle');
var tokyo = document.getElementById('tokyo');
var dubai = document.getElementById('dubai');
var paris = document.getElementById('paris');
var lima = document.getElementById('lima');


//Seattle
var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySales: [],
  dailyTotal: 0,

  getrandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    console.log(this.getrandomNumber());
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getrandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies.`;
      seattle.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = `${this.dailyTotal} total.`;
    seattle.appendChild(liElement);
  }
};


//Tokyo
var tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  hourlySales: [],
  dailyTotal: 0,

  getrandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    console.log(this.getrandomNumber());
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getrandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies.`;
      tokyo.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = `${this.dailyTotal} total.`;
    tokyo.appendChild(liElement);
  }
};

//Dubai
var dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 37,
  hourlySales: [],
  dailyTotal: 0,
  getrandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    console.log(this.getrandomNumber());
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getrandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies.`;
      dubai.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = `${this.dailyTotal} total.`;
    dubai.appendChild(liElement);
  }
};

//Paris
var parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  hourlySales: [],
  dailyTotals: 0,
  getrandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    console.log(this.getrandomNumber());
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getrandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies.`;
      paris.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = `${this.dailyTotal} total.`;
    paris.appendChild(liElement);
  }
};

//Lima
var limaStore = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  hourlySales: [],
  dailyTotal: 0,

  getrandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateHourlySales() {
    console.log(this.getrandomNumber());
    for (var i = 0; i < hours.length; i++) {
      var calcSalesRound = Math.ceil(this.getrandomNumber() * this.avg);
      this.hourlySales[i] = calcSalesRound;
      this.dailyTotal += calcSalesRound;
    }
  },

  render: function () {
    this.calculateHourlySales();
    for (var i = 0; i < this.hourlySales.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]} ${this.hourlySales[i]} cookies.`;
      lima.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = `${this.dailyTotal} total.`;
    lima.appendChild(liElement);
  }
};




seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();
