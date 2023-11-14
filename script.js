var gridContainer = document.getElementById('gridContainer');



function makeGrid(input) {
   
    for (let i=0; i<input; i++) {
        for (let j=0; j<input; j++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        gridContainer.appendChild(square);
        }
    }

    let newColor = document.querySelectorAll(".grid-item");
    for (const color of newColor) {
        color.addEventListener("mouseover", () => {
            color.style.backgroundColor = "red";
        })
        
    }
}

function clearGrid() {
    let clearColor = document.querySelectorAll(".grid-item");
    for (const color of clearColor) {
        color.style.backgroundColor = "black";
    }
        
}


function gridSize() {
    gridContainer.innerHTML = '';
    let grid = prompt("Enter grid size up to 100");
    if(grid <= 100) {
        let num = 22*grid;
        gridContainer.style.height = num + "px";
        gridContainer.style.width = num + "px";
        makeGrid(grid);
    }
}