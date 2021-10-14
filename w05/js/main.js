import Hike from './hikes.js';

const body = document.getElementById("hikes")

// Create a new instance of the Hike class 
let myHike = new Hike('hikeListId');

// Render the hike list on the page
myHike.showHikeList()

/*
// Grab a list of the header elements
      //const listOfheaders = document.getElementsByClassName("titleButton")

      // Loop through the list of headers and set an onclick method
      for (let i=0; i<listOfheaders.length; i++) {
        listOfheaders[i].addEventListener("click", () => {
                // Call the detailViewHike method of each hike when the header is clicked
                myHike.detailViewHike(i);
                
            });
            */
