const boxes = document.querySelectorAll('.box');
let player = 'X';
function updateGame(box){
    if(box.innerHTML === '') {
        box.innerHTML = player;
    } 

    // Check to see how many boxes are filled
    let filled = 0;
    boxes.forEach(box => {if(box.innerHTML !== ""){filled++}})

    // Check for a win
    if(
     (boxes[0].textContent == player && boxes[1].textContent == player && boxes[2].textContent == player) ||
     (boxes[3].textContent == player && boxes[4].textContent == player && boxes[5].textContent == player) ||
     (boxes[6].textContent == player && boxes[7].textContent == player && boxes[8].textContent == player) ||
     (boxes[0].textContent == player && boxes[3].textContent == player && boxes[6].textContent == player) ||
     (boxes[1].textContent == player && boxes[4].textContent == player && boxes[7].textContent == player) ||
     (boxes[2].textContent == player && boxes[5].textContent == player && boxes[8].textContent == player) ||
     (boxes[0].textContent == player && boxes[4].textContent == player && boxes[8].textContent == player) ||
     (boxes[2].textContent == player && boxes[4].textContent == player && boxes[6].textContent == player)){
        alert(`The winner is ${player}`)
    } else if (filled === 9) { // If the boxes are filled and there is no win it is a tie
        alert("It is a tie!")
    }

    //After we have checked for a win we can now switch users
    if(player === 'X'){          
        player = 'O';
    } else {
        player = 'X';
    }
}
boxes.forEach(box => {
    box.addEventListener('click',() => {updateGame(box)})
});
