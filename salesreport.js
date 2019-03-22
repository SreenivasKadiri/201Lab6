'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var table = document.getElementById('sales-table');
//var form = document.getElementById('loc_form');
var form = document.getElementsByTagName('form')[0];
//constructor function
function CookieStand( min, max, avgcust, name){
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avgcust;
  this.location = name;
  this.customersEachHour = [];
  this.cookiesPerHour = [];
  this.dailyCookies = 0;
  CookieStand.all.push(this);
}

//function to calculate customers for each hour
CookieStand.prototype.calcCustomerPerHour = function(){
  for(var i =0; i < hours.length; i++){
    this.customersEachHour.push(getRandomCustCount(this.minCustomersPerHour,this.maxCustomersPerHour));
  }
};

//function to calculate cookier per hour and daily totals
CookieStand.prototype.calcCookiePerHour = function(){
  this.calcCustomerPerHour();
  for (var i=0; i < hours.length; i++ ){
    var hourCount = Math.ceil(this.customersEachHour[i]*this.avgCookiesPerCustomer);
    this.cookiesPerHour.push(hourCount);
    this.dailyCookies +=hourCount;
    console.log('calcCustomerPerHour:', hourCount , this.dailyCookies, this.cookiesPerHour[i]);
  }
};

CookieStand.prototype.render = function(){
  this.calcCookiePerHour();
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent=this.location;
  tr.appendChild(td);
  console.log('with in render function:', this.cookiesPerHour.length);
  for (var i=0; i<hours.length; i++){
    td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    //td.textContent = 5;
    tr.appendChild(td);
    console.log('cookiesPerHour Count:', this.cookiesPerHour[i]);
  }
  var th = document.createElement('th');
  console.log('Daily cookie count:', this.dailyCookies);
  th.textContent=this.dailyCookies;
  tr.appendChild(th);

  table.appendChild(tr);
};


function getRandomCustCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


CookieStand.all = [];
new CookieStand (23, 65, 6.3, 'Pike Street');
new CookieStand (3, 24, 1.2, 'SecTac Airport');
new CookieStand(11, 38, 3.7, 'Seattle Center');
new CookieStand(20, 38, 2.3, 'Capitol Hill');
new CookieStand (2, 16, 4.6, 'Alki');


function createHeader(){
  var th = document.createElement('th');
  var tr = document.createElement('tr');

  th.textContent='Stand Locations';
  tr.appendChild(th);
  for(var i=0; i<hours.length; i++){
    th = document.createElement('th');
    th.textContent=hours[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent='Daily Totals';
  tr.appendChild(th);
  table.appendChild(tr);
}

function createFooter(){
  var tr= document.createElement('tr');
  var th= document.createElement('th');
  th.textContent='Hourly Totals';
  tr.appendChild(th);

  var totalOfTotals = 0;
  var hourlyTotal = 0;

  for (var i=0; i < hours.length; i++){
    hourlyTotal = 0;
    for (var j=0; j<CookieStand.all.length; j++){
      hourlyTotal += CookieStand.all[j].cookiesPerHour[i];
      totalOfTotals += CookieStand.all[j].cookiesPerHour[i];
    }
    th= document.createElement('th');
    th.textContent = hourlyTotal;
    tr.appendChild(th);
  }
  th=document.createElement('th');
  th.textContent=totalOfTotals;
  tr.appendChild(th);
  table.appendChild(tr);
}

//collect form data
function form_data(event){
  event.preventDefault();
  var location = event.target.location.value;
  var mincust = event.target.mincust.value;
  var maxcust = event.target.maxcust.value;
  var avgcustomer = event.target.AvgCookie.value;
  //var newStore = 
  new CookieStand(mincust, maxcust,avgcustomer, location);
  form.reset();
  renderTable();
}

function renderTable() {
  table.innerHTML = '';
  createHeader();
  console.log('CookieStand count in renterTable', CookieStand.all.length);
  for(var i = 0; i < CookieStand.all.length; i++){
    CookieStand.all[i].render();
    console.log('CookieStand count in renterTable2', CookieStand.all.length);
  }
  createFooter();
}

renderTable();
console.log('form check:',form);
form.addEventListener('submit', form_data);
