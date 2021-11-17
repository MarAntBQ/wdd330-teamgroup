import QuakesView from './views/QuakesView.js';
import Quake from './models/Quake.js';
import {
    getJSON,
    getLocation
} from './utilities.js';




const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
const listElement = document.querySelector("#quakeList");
const radius = 100;
let quakes = [];
let myCurrentGeo = "";


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
            let htmlList = ''
            getJSON(url)
                .then(response => {
                    quakes = response.features.map((quake) => {
                        return `
                    ${quake.properties.title} 
                    ${new Date(
                    quake.properties.time
                     )}
                    `;
                    });
                    
                })
                .then(() => {
                    listElement.innerHTML = quakes.join("");
                    // attach a listener to watch for a click on the quake. If it sees one then render out the details of the quake
                    listElement.addEventListener("click", (event) => {
                      console.log(event.currentTarget); // note the difference between target and currentTarget
                      console.log(event.target);
                      const quakeId = event.target.dataset.id;
                      // find the quake with that ID
                      const quake = quakes.features.find((item) => item.id === quakeId);
                      // render details
                      const detailsElement = document.querySelector("#quakeDetails");
                      // our quake information is inside of an object called properties. Objects are sometimes hard to iterate over...below is a nice way to convert an object into an array.
                      const quakeProperties = Object.entries(quake.properties);
                      detailsElement.innerHTML = quakeProperties
                        .map((item) => {
                          if (item[0] === "time" || item[0] === "updated") {
                            return `
                  ${item[0]}: ${new Date(item[1])}
                  `;
                          } else return `
                  ${item[0]}: ${item[1]}
                  `;
                        })
                        .join("");
                    });
                })
            
        })
        
    // use the url to request the correct quakes 
    //log out the quakes for now.
}

//getQuakesForLocation();

testGetQuakesForLocation();


// render the list of quakes
// how did I know to look at quakes.features? I looked at the returned data from the fetch!