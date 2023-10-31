const container = document.querySelector(`.container`);
const input = document.querySelector(`#input`);
const gridSize = document.querySelector(`#gridSize`);
const reset = document.querySelector(`#reset`);
const active = document.querySelectorAll(`.active`)


// event listeners
input.addEventListener(`click`, () => {spawnGridSize()})
reset.addEventListener(`click`, () => {resetGrid()})
container.addEventListener
('mousemove', (event) => {
    
    if(event.buttons == 1) {
     event.preventDefault();
     event.target.style.backgroundColor = `black`
     }
   });




let defaultGrid = generateGridSize(16);

let size = 16


// spawn default grid size on first load and reload
function generateGridSize(size){
        // guard clause for maximum input
        if (size > 100){
            return alert(`Input exceeds the maximum allowed grid size of 100 x 100, please input a number below the maximum`);
        }
        // guard clause to reset grid size indicator back to 0 x 0
        if (size == null){
            generateGridSize(16);
            }
    for(i = 1; i <= (size*size); i++) {
        const div = document.createElement(`div`);
    //set unique id for each spawned block
        div.setAttribute(`id`, i);
        div.setAttribute(`class`, `active`);
        
    //Dynamically scale blocksize to always fit the parent div no matter the amount of blocks
        const blockSize = 100/size;
        div.style.width = String(blockSize + `%`);
        div.style.height = String(blockSize + `%`);
        
        gridSize.textContent = `grid size: ${size} x ${size}`
        gridSize.style.width = `fit-content`
        container.append(div);
        }
}

// spwan a grid of a size
function spawnGridSize(){
    // To clear the grid on function call
    container.innerHTML = ``
    // to prompt for user input for gridsize
    size = prompt(`Please enter grid size. Maximum grid size is 100 x 100`)
    generateGridSize(size);
    

}

function resetGrid(){
    container.innerHTML = ``;
    container.style.backgroundColor = `red`;
    generateGridSize(size);
}

function randomColorGenerator(){
    const number = Math.floor(Math.random()*7) + 1;
    const red = `red`
    const orange = `orange`
    const yellow = `yellow`
    const green = `green`
    const blue = `blue`
    const indigo = `indigo`
    const violet = `violet`

switch (number) {
    case 1:
        return red
    case 2:
        return orange
    case 3:
        return yellow
    case 4:
        return green
    case 5:
        return blue
    case 6:
        return indigo
    case 7:
        return violet    
        
}
}