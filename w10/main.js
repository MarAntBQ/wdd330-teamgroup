import {
    getJSON,
    getLocation
} from './utilities.js';


const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
let quakes = [];
let myCurrentGeo = "";
let radius = 100;
let geoUrl;


function testGetQuakesForLocation() {
    // call the getLocation function to get the lat/long
    getLocation().then(response => {
            myCurrentGeo = response.coords;
        })
        .then(() => {
            // use that information to build out the correct URL
            //geoUrl = baseUrl + `&latitude=${myCurrentGeo.latitude}&longitude=${myCurrentGeo.longitude}&maxradiuskm=${radius}`; // add location information here
            return baseUrl + `&latitude=${myCurrentGeo.latitude}&longitude=${myCurrentGeo.longitude}&maxradiuskm=${radius}`; // add location information here
        })
        .then(url => {
            getJSON(url)
            .then(response => {
                console.log(response);
            })
        })
    // use the url to request the correct quakes 
    //log out the quakes for now.
}

//getQuakesForLocation();
testGetQuakesForLocation();