const gridContainer = document.getElementById('gridContainer');


for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
    const square = document.createElement('div');

    square.classList.add('grid-item');

    gridContainer.appendChild(square);
}}

