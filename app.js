const container = document.querySelector(`.container`);

// spwan a grid of a size and assign a unique id to each block in the grid
function spawnGridSize(size){
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