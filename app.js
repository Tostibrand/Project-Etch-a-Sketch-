const container = document.querySelector(`.container`);

function spawnGridSize(size){
    for(i = 1; i <= size; i++) {
    const div = document.createElement(`div`);
    div.setAttribute(`id`, i);
    div.textContent = i
    container.appendChild(div)
    }

}