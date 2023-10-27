const container = document.querySelector(`.container`);
const input = document.querySelector(`#input`);

// event listeners
input.addEventListener(`click`, () => {spawnGridSize()}) 








// spwan a grid of a size and assign a unique id to each block in the grid
function spawnGridSize(){
    // To clear the grid on function call
    container.innerHTML = ``
    // to prompt for user input for gridsize
    const size = prompt(`Enter a number to spwan a grid of squares`)
    if (size > 10000){
        return alert(`Input exceeds the maximum allowed gridsize of 10000 boxes, please input a number below the maximum`);
    }
    for(i = 1; i <= size; i++) {
    const div = document.createElement(`div`);
//set unique id for each spawned block
    div.setAttribute(`id`, i);
    
//Dynamically scale blocksize to always fit the parent div no matter the amount of blocks
    const blockSize = 100/Math.sqrt(size);
    div.style.width = String(blockSize + `%`);
    div.style.height = String(blockSize + `%`);
    
    container.append(div);
    }

}