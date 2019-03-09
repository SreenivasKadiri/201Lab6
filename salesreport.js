var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var head = document.getElementById('tableHeader');
var body = document.getElementById('tableBody');
var footer = document.getElementById('tableFooter');
var dataHead = [];
var dataFooter = [];
var locations = [];


//constructor function
function Location( min, max, avgcust, name) {
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avgcust;
  this.name = name;
}

var pikeStreet = new Location (23, 65, 6.3, 'Pike Street');
var seatacAirport = new Location (3, 24, 1.2, 'SecTac Airport');
var seattleCenter = new Location(11, 38, 3.7, 'Seattle Center');
var capitolHills = new Location(20, 38, 2.3, 'Capitol Hill');
var alkiBeach = new Location (2, 16, 4.6, 'Alki');

//adding objects to the locations array
locations.push(pikeStreet,seatacAirport, seattleCenter, capitolHills, alkiBeach);

// header data creation
  dataHead.push('<th>'+' '+'</th>');
  for (var j=0; j<hours.length; j++) {
    dataHead.push('<th>' + hours[j] + '</th>');
  }
// header append
  dataHead.push('<th>'+ 'Daily Location Total'+'</th>');
  var newRow = document.createElement("tr");
  var tempData = dataHead.join(' ');
  newRow.innerHTML =  tempData;  
  head.appendChild(newRow);

// 
var totalCountFooter = [];

//for loop for each of the locations
for (var k=0; k<locations.length; k++) {
    //Row data creation
    var bodyData = [];
    var newRowBody = document.createElement('tr');
    var dailyLocationCount = 0;

    bodyData.push('<td>'+ locations[k].name + '</td>') 
    
    
    //hours for loop
    for (var l=0; l<hours.length;l++){
    var cookieCount = calcCookies(getRandomCustCount(locations[k].minCustomersPerHour, locations[k].maxCustomersPerHour), locations[k].avgCookiesPerCustomer)
    dailyLocationCount = dailyLocationCount + cookieCount;
    if (isNaN(totalCountFooter[l])){
      totalCountFooter[l]=cookieCount;
    }
    else {
    totalCountFooter[l]=cookieCount + totalCountFooter[l];
    }

    bodyData.push('<td>'+ cookieCount + '</td>') 
    }
    
    console.log('array totalCountFooter: ', totalCountFooter);
    bodyData.push('<td>'+ dailyLocationCount + '</td>') 
    var tempBodyData = bodyData.join(' ');
    newRowBody.innerHTML = tempBodyData;
    body.appendChild(newRowBody);
  }
  var totalCountAllLocations = 0;
  // footer data creation
  dataFooter.push('<td>'+'Totals '+'</td>');
  for (var k=0; k<totalCountFooter.length; k++) {
    dataFooter.push('<td>' + totalCountFooter[k] + '</td>');
    totalCountAllLocations=totalCountAllLocations+totalCountFooter[k];
  }
  dataFooter.push('<td>'+totalCountAllLocations+'</td>');
  // header append
  var newRowFooter = document.createElement("tr");
  var tempData = dataFooter.join(' ');
  newRowFooter.innerHTML =  tempData;  
  footer.appendChild(newRowFooter);
 

  function getRandomCustCount(min, max) {
    console.log('min and max: ', min,max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function calcCookies(AvgCust, customerCount) {
    return Math.ceil(AvgCust*customerCount);
  }
