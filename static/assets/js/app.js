// Creating map object


// Creating map object

var mymap = L.map('map')
  .setView([38.27, -100.86], 4);

// map.invalidateSize(true);

// Adding tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(mymap);

var deathsUrl = "http://127.0.0.1:5000/api/v1.0/deathTest";
var salesUrl = "http://127.0.0.1:5000/api/v1.0/prescriptionTest";

var deathsDB, salesDB;

d3.json(deathsUrl).then(function(deaths){
  d3.json(salesUrl).then(function(sales) {

    deathsDB = deaths;
    salesDB = sales;

    var sel = d3.select('#stateSelect');
    sel.html('');

    var states = [];

    sales.forEach(obj => {
      if(!states.includes(obj.State)) {
        states.push(obj.State);
      }
  });

  states.forEach(state => {
    sel
      .append('option')
      .text(state);
  });
  
    console.log("DEATHS:", deaths);
    console.log("SALES:", sales);
    console.log("sales[0]:", sales[0]["Prescriptions per 100,000"]);
    var bamaTotal = parseFloat(sales[0]["Prescriptions per 100,000"]) + parseFloat(sales[1]["Prescriptions per 100,000"]);
    console.log(bamaTotal);


    
   
    

    
  
  }); // end of d3.json sales
}); // end of d3.json deaths


// Liz's stacked Area Chart
//Chart code 
/* Create chart instance */
var chart = am4core.create("chartdiv", am4charts.RadarChart);

chart.data = [{
  "year": "1994",
  "cars": 1587,
  "motorcycles": 650,
  "bicycles": 121
}, {
  "year": "1995",
  "cars": 1567,
  "motorcycles": 683,
  "bicycles": 146
}, {
  "year": "1996",
  "cars": 1617,
  "motorcycles": 691,
  "bicycles": 138
}, {
  "year": "1997",
  "cars": 1630,
  "motorcycles": 642,
  "bicycles": 127
}, {
  "year": "1998",
  "cars": 1660,
  "motorcycles": 699,
  "bicycles": 105
}, {
  "year": "1999",
  "cars": 1683,
  "motorcycles": 721,
  "bicycles": 109
}, {
  "year": "2000",
  "cars": 1691,
  "motorcycles": 737,
  "bicycles": 112
}, {
  "year": "2001",
  "cars": 1298,
  "motorcycles": 680,
  "bicycles": 101
}, {
  "year": "2002",
  "cars": 1275,
  "motorcycles": 664,
  "bicycles": 97
}, {
  "year": "2003",
  "cars": 1246,
  "motorcycles": 648,
  "bicycles": 93
}, {
  "year": "2004",
  "cars": 1318,
  "motorcycles": 697,
  "bicycles": 111
}, {
  "year": "2005",
  "cars": 1213,
  "motorcycles": 633,
  "bicycles": 87
}, {
  "year": "2006",
  "cars": 1199,
  "motorcycles": 621,
  "bicycles": 79
}, {
  "year": "2007",
  "cars": 1110,
  "motorcycles": 210,
  "bicycles": 81
}, {
  "year": "2008",
  "cars": 1165,
  "motorcycles": 232,
  "bicycles": 75
}, {
  "year": "2009",
  "cars": 1145,
  "motorcycles": 219,
  "bicycles": 88
}, {
  "year": "2010",
  "cars": 1163,
  "motorcycles": 201,
  "bicycles": 82
}, {
  "year": "2011",
  "cars": 1180,
  "motorcycles": 285,
  "bicycles": 87
}, {
  "year": "2012",
  "cars": 1159,
  "motorcycles": 277,
  "bicycles": 71
}];