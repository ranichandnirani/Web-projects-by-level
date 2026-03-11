// for selecting board

const board = document.querySelector('.board');
const blockHeight = 50
const blockWidth = 50

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks = [];
const snake = [{r: 1, c: 3}]
let direction = "right"

// creating bolcks

// for(let i = 0; i < rows*cols; i++) {
//     const block = document.createElement("div");
//     block.classList.add("block");
//     board.appendChild(block);
// }

for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        block.innerText = `${row}-${col}`;
        blocks[ `${row}-${col}` ] = block;
    }
}

function render(){
    snake.forEach(segment =>{
        // console.log(segment)
        blocks[`${segment.r}-${segment.c}`].classList.add("fill")
    });
}

render();

setInterval(() => {

    let head = null;

    if(direction === "left") {
        head = {r: snake[ 0 ].r, c: snake[ 0 ].c-1}
    } else if(direction === "right") {
        head = {r: snake[ 0 ].r, c: snake[ 0 ].c+1}
    }


    snake.forEach(segment => {
        blocks[`${segment.r}-${segment.c}`].classList.remove("fill");
    });

    snake.unshift(head);
    snake.pop();

    render();

}, 400);
