import Hikes from './hikes.js';

const body = document.getElementById("hikes")

const myHike = new Hikes('hikeListId');

myHike.showHikeList()

const hikes = document.getElementsByClassName("titleButton")
console.log(hikes)

for (let i=0; i<hikes.length; i++) {hikes[i].addEventListener("click", () => {
             myHike.detailViewHike(myHike.hikeList[i])
         })}

// hikes.forEach(hike => {
//     hike.addEventListener("click", () => {
//         myHike.detailViewHike(myHike.hikeList[hikes.indexOf(hike)])
//     })
// })