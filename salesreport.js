var pikeStreet = {
    minCustomersPerHour: 5,
    maxCustomersPerHour: 20,
    avgCookiesPerCustomer: 2 
};


  function getRandomCustCount(min, max) {
    console.log('min and max: ', min,max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function calcCookies(cookieCount, cookieCount) {
    return cookieCount*cookieCount;
  }

  var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
  var locations = ['SeaTac Airport','Seattle Center','Capitol Hill','Alki'];
  var taList = document.getElementById('PikeStreet');  
  var totalCookies = 0;
  for (var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      var custCount = getRandomCustCount(pikeStreet.minCustomersPerHour,pikeStreet.maxCustomersPerHour);
      var cookiesPerHour = calcCookies(pikeStreet.avgCookiesPerCustomer, custCount);
      totalCookies = totalCookies + cookiesPerHour;
           liEl.textContent = hours[i] + ':' + cookiesPerHour +' Cookies';
      taList.appendChild(liEl);
  }

  var liE2 = document.createElement('li');
  liE2.textContent= 'Total:'+totalCookies+'Cookies';
  taList.appendChild(liE2); 
  
  
 

  //console.log('RandonNum: ', getRandomInt(5,20));
  //console.log('RandonNum: ', pikeStreet.customersperhour());
//   console.log('result',customersPerHour() );
  //console.log('pikeStree MaxCust: ', pikeStreet.maxCustomersPerHour);
  //console.log('pikeStree MinCust: ', pikeStreet.minCustomersPerHour);
