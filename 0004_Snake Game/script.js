// for selecting board

const board = document.querySelector('.board');
const blockHeight = 50
const blockWidth = 50

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
let intervalId = null;
let food = {r:Math.floor(Math.random()* rows), c:Math.floor(Math.random()*cols)}

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

    let head = null;

    blocks[`${food.r}-${food.c}`].classList.add("food");

    if(direction === "left") {
        head = {r: snake[ 0 ].r, c: snake[ 0 ].c - 1}
    } else if(direction === "right") {
        head = {r: snake[ 0 ].r, c: snake[ 0 ].c + 1}
    } else if(direction === "down") {
        head = {r: snake[ 0 ].r + 1, c: snake[ 0 ].c}
    } else if(direction === "up") {
        head = {r: snake[ 0 ].r - 1, c: snake[ 0 ].c}
    }


    // game over alert
    if(head.r < 0 || head.r > rows || head.c < 0 || head.c >cols) {
        alert("Game Over");
        clearInterval(intervalId);
    }

    // food
    if(head.r == food.r && head.c == food.c) {
        blocks[`${food.r}-${food.c}`].classList.remove("food");
        food = {r:Math.floor(Math.random()* rows), c:Math.floor(Math.random()*cols)}
        blocks[`${food.r}-${food.c}`].classList.add("food");
    }

    snake.forEach(segment => {
        blocks[`${segment.r}-${segment.c}`].classList.remove("fill");
    });

    snake.unshift(head);
    snake.pop();


    snake.forEach(segment =>{
        // console.log(segment)
        blocks[`${segment.r}-${segment.c}`].classList.add("fill");
    });
}

// render();

intervalId = setInterval(() => {


    render();

}, 400);

// ArrowUp
// ArrowRight
// ArrowLeft
// ArrowDown

addEventListener("keydown", (event) => {
    // console.log(event.key);


    if(event.key == "ArrowUp") {
        direction = "up";
    } else if(event.key == "ArrowRight") {
        direction = "right";
    } else if(event.key == "ArrowLeft") {
        direction = "left";
    } else if(event.key == "ArrowDown") {
        direction = "down";
    }
    
});
