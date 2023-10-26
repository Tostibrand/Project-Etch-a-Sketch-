const container = document.querySelector(`.container`);

// spwan a grid of a size and assign a unique id to each block in the grid
function spawnGridSize(size){
    for(i = 1; i <= size; i++) {
    const div = document.createElement(`div`);
    div.setAttribute(`id`, i);
    const blockSize = 100/Math.sqrt(size)
    div.style.width = String(blockSize + `%`)
    div.style.height = String(blockSize + `%`)
    // div.textContent = i
    container.append(div)
    }

}