var pikeStreet = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerCustomer: 6.3,
    name: 'Pike Street'
};

var SeaTacAirport = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  name:'SeaTac Airport'
};

var seattleCenter = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  name:'Seattle Center' 
};

var capitolHill = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  name: 'Capitol Hill'
};

var alki = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  name:'Alki'
};


  function getRandomCustCount(min, max) {
    console.log('min and max: ', min,max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function calcCookies(AvgCust, cookieCount) {
    return Math.ceil(AvgCust*cookieCount);
  }

   var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
   var locations = ['SeaTac Airport','Seattle Center','Capitol Hill','Alki'];

  //Pike Street list
  var taList = document.getElementById('PikeStreet');  
  var totalCookies = 0;
  for (var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var custCount = getRandomCustCount(pikeStreet.minCustomersPerHour,pikeStreet.maxCustomersPerHour);
      var cookiesPerHour = calcCookies(pikeStreet.avgCookiesPerCustomer, custCount);
      totalCookies = totalCookies + cookiesPerHour;
           liEl.textContent = `${hours[i]} : ${cookiesPerHour} Cookies`;
      taList.appendChild(liEl);
  }
  var liE1 = document.createElement('li');
  liE1.textContent= `Total: ${totalCookies} Cookies`;
  taList.appendChild(liE1); 

/*
// Function to crate LI for all locations
function CalculateByLocations(CapitolHill) {
  var locationList = document.getElementById(location);
  var totalCookies = 0;
  for (var i =0; i < hours.length; i++) {
      var liE3 = document.createElement('li');
      var custCount = getRandomCustCount(location.minCustomersPerHour,location.maxCustomersPerHour);
      console.log('custCount: ',custCount);
      console.log(location.avgCookiesPerCustomer);
      var cookiesPerHour = calcCookies(location.avgCookiesPerCustomer, custCount);
      console.log('cookiesPerHour: ',cookiesPerHour);
      totalCookies = totalCookies + cookiesPerHour;
      liE3.textContent = hours[i] + ':' + cookiesPerHour +' Cookies';
      //locationList.appendChild(liE3);
      locationList.appendChild(liE3);
  }

  var liE4 = document.createElement('li');
  liE4.textContent= 'Total:'+totalCookies+'Cookies';
  locationList.appendChild(liE4); 

}

//CalculateByLocations(SeaTacAirport);
CalculateByLocations(CapitolHill);
//CalculateByLocations(seaTacAirport);

*/


  //SeaTacAirport Street list
  var taList2 = document.getElementById('SeaTacAirport');  
  totalCookies = 0;
  for (var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var custCount = getRandomCustCount(SeaTacAirport.minCustomersPerHour,SeaTacAirport.maxCustomersPerHour);
      var cookiesPerHour = calcCookies(SeaTacAirport.avgCookiesPerCustomer, custCount);
      totalCookies = totalCookies + cookiesPerHour;
      liEl.textContent = `${hours[i]} : ${cookiesPerHour} Cookies`;
      taList2.appendChild(liEl);
  }
  var liE3 = document.createElement('li');
  liE3.textContent= `Total: ${totalCookies} Cookies`;
  taList2.appendChild(liE3); 

  //SeattleCenter  list
  var locationlist = document.getElementById('SeattleCenter');  
  totalCookies = 0;
  for (var i =0; i < hours.length; i++) {
      var liE5 = document.createElement('li');
      var custCount = getRandomCustCount(seattleCenter.minCustomersPerHour,seattleCenter.maxCustomersPerHour);
      var cookiesPerHour = calcCookies(seattleCenter.avgCookiesPerCustomer, custCount);
      totalCookies = totalCookies + cookiesPerHour;
      liE5.textContent = `${hours[i]} : ${cookiesPerHour} Cookies`;
      locationlist.appendChild(liE5);
  }
  var liE6 = document.createElement('li');
  liE6.textContent= `Total: ${totalCookies} Cookies`;
  locationlist.appendChild(liE6); 

   //CapitolHill  list
   var locationlistCap = document.getElementById('CapitolHill');  
   totalCookies = 0;
   for (var i =0; i < hours.length; i++) {
       var liE6 = document.createElement('li');
       var custCount = getRandomCustCount(capitolHill.minCustomersPerHour,capitolHill.maxCustomersPerHour);
       var cookiesPerHour = calcCookies(capitolHill.avgCookiesPerCustomer, custCount);
       totalCookies = totalCookies + cookiesPerHour;
       liE6.textContent = `${hours[i]} : ${cookiesPerHour} Cookies`;
       locationlistCap.appendChild(liE6);
   }
 
   var liE7 = document.createElement('li');
   liE7.textContent= `Total: ${totalCookies} Cookies`;
   locationlistCap.appendChild(liE7); 

 //ALKI  list
 var locationAlki = document.getElementById('Alki');  
 totalCookies = 0;
 for (var i =0; i < hours.length; i++) {
     var liE8 = document.createElement('li');
     var custCount = getRandomCustCount(alki.minCustomersPerHour,alki.maxCustomersPerHour);
     var cookiesPerHour = calcCookies(alki.avgCookiesPerCustomer, custCount);
     totalCookies = totalCookies + cookiesPerHour;
     liE8.textContent = `${hours[i]} : ${cookiesPerHour} Cookies`;
     locationAlki.appendChild(liE8);
 }

 var liE9 = document.createElement('li');
 liE9.textContent= `Total: ${totalCookies} Cookies`;
 locationAlki.appendChild(liE9);  
