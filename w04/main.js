const boxes = document.querySelectorAll('.box');
let player = 'X';
function updateGame(box){
        if(box.innerHTML === '') {
            box.innerHTML = player;
            if(player === 'X'){          
                player = 'O';
            } else {
                player = 'X';
            }
        } 
}
boxes.forEach(box => {
    box.addEventListener('click',() => {updateGame(box)})
});const boxes = document.querySelectorAll('.box');
let player = 'X';
function updateGame(box){
        if(box.innerHTML === '') {
            box.innerHTML = player;
            if(player === 'X'){          
                player = 'O';
            } else {
                player = 'X';
            }
        } 
}
boxes.forEach(box => {
    box.addEventListener('click',() => {updateGame(box)})
});