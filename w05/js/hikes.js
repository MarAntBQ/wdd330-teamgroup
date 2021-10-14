//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];

  // Create the hike class
  class Hike {
    // Constructor 
    constructor(listOfHikes) {
      this.listOfHikes = listOfHikes;
    }
    
    // Methods
    showHikeList() {
        const hikeListElement = document.getElementById("hikes");
        hikeListElement.innerHTML = "";
        renderHikeList(hikeList, hikeListElement);
    }

    
    

  }

  
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  
  function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      //console.log(hike)
      parent.appendChild(renderOneHike(hike));

    });

    // Get a list of the headers we just rendered
    const listOfheaders = document.getElementsByClassName("titleButton")

    // Loop through the list of headers and set an onclick method
    for (let i=0; i<listOfheaders.length; i++) {
      listOfheaders[i].addEventListener("click", () => {
              // Call the detailViewHike function when the header is clicked
              detailViewHike(i);
          });
    }
  }

  function renderOneHike(hike) {
    const item = document.createElement("li");
  
    item.innerHTML = ` <h2 class="titleButton">${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
  
    return item;
  }

  function detailViewHike(indexOfHike) {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    const hikeWeAreWorkingWith = hikeList[indexOfHike];
    hikeListElement.appendChild(renderOneHike(hikeWeAreWorkingWith));
    
    // Add a back button below the hike we are working with
    let backButton = document.createElement("BUTTON");
    backButton.innerHTML = "Back";
    
    backButton.addEventListener("click" , () => {
      hikeListElement.innerHTML = "";
      renderHikeList(hikeList, hikeListElement)
      backButton.style.display = "none";
    });
    hikeListElement.lastChild.appendChild(backButton);
    
  }

  

  export default Hike