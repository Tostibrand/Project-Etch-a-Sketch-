const container = document.querySelector(`.container`);
const input = document.querySelector(`#input`);
const gridSize = document.querySelector(`#gridSize`);

// event listeners
input.addEventListener(`click`, () => {spawnGridSize()}) 








// spwan a grid of a size and assign a unique id to each block in the grid
function spawnGridSize(){
    // To clear the grid on function call
    container.innerHTML = ``
    // to prompt for user input for gridsize
    let size = prompt(`How many boxes do you want? I'll round it of to the closest root number for the perfect square`)
    // guard clause for maximum input
    if (size > 10000){
        return alert(`Input exceeds the maximum allowed grid size of 10000 boxes, please input a number below the maximum`);
    }
    // guard clause to reset grid size indicator back to 0 x 0
    if (size == null){
        gridSize.textContent = `grid size: 0 x 0`
    }

    // to round off the input to the closest square root number
    size = Math.floor(Math.sqrt(size));
    console.log(size)
    // size = size*size;
    for(i = 1; i <= (size*size); i++) {
    const div = document.createElement(`div`);
//set unique id for each spawned block
    div.setAttribute(`id`, i);
    
//Dynamically scale blocksize to always fit the parent div no matter the amount of blocks
    const blockSize = 100/size;
    div.style.width = String(blockSize + `%`);
    div.style.height = String(blockSize + `%`);
    
    gridSize.textContent = `grid size: ${size} x ${size}`
    gridSize.style.width = `fit-content`
    container.append(div);
    }

}