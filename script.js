createContainer(16)
let gridStr = '';

function createContainer(squares) {
    const container = document.querySelector('#container');
    const sketch = document.createElement('div');
    sketch.classList.add('sketch');
    console.log('container created with: ' + squares);
    // container.style.padding = '20px';
    container.style.position = 'relative';
    container.style.top = '20px';
    rowLength = 960 / squares;

    for (i = 0; i < squares; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.position = 'absolute';
        row.style.top = `${(i) * (rowLength + 2)}px`;
        // row.style.clear = '30px';

        for (j = 0; j < squares; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.style.float = 'left';
            // square.style.clear = '30px';
            // square.style.clear = `${(i+1)*100}px`
            square.style.height = `${rowLength}px`;
            square.style.width = `${rowLength}px`;
            // square.style.padding = '10px';
            square.style.border = 'black solid 1px';

            row.appendChild(square);
        }
        sketch.appendChild(row);
    }
    container.appendChild(sketch);

    const square = document.querySelectorAll('.square');
    // Note how changeColor has no brackets.
    square.forEach(item => item.addEventListener('mouseover', changeColor));
}

function changeColor() {
    // Note the use of 'this'
    this.classList.add('hover');
}

function clear() {
    const sketch = document.querySelector('.sketch');
    sketch.remove();

    while (gridStr === '') {
        gridStr = window.prompt('How many squares per side to make a new grid?', '16');
        if (isNaN(gridStr)) {
            gridStr = prompt('Please enter a number.');
        }
    }

    let gridNum = Number(gridStr);
    gridStr = '';
    createContainer(gridNum);
}

const button = document.querySelector('button');
button.addEventListener('click', clear);