// for selecting board

const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const restartButton = document.querySelector(".btn-restart");

const highScoreElement = document.querySelector("#high-score");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");

const blockHeight = 50
const blockWidth = 50

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = `00-00`;

highScoreElement.innerText = highScore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timmerIntervalId = null;
let food = {r:Math.floor(Math.random()* rows), c:Math.floor(Math.random()*cols)}

const blocks = [];
let snake = [{r: 1, c: 3}]
let direction = "right"

// creating bolcks

for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
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
    if(head.r < 0 || head.r >= rows || head.c < 0 || head.c >= cols) {
        // alert("Game Over");
        clearInterval(intervalId);

        modal.style.display = "flex";
        gameOverModal.style.display = "flex";
        startGameModal.style.display = "none";
        
        return;
    }

    // food
    if(head.r == food.r && head.c == food.c) {
        blocks[`${food.r}-${food.c}`].classList.remove("food");
        food = {r:Math.floor(Math.random()* rows), c:Math.floor(Math.random()*cols)}
        blocks[`${food.r}-${food.c}`].classList.add("food");

        // for increasing tail after eating food
        snake.unshift(head);

        // increase score when snake eat food.
        score += 10;
        scoreElement.innerText = score;

        // Store score in high score
        if(score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore.toString());
        }
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

startButton.addEventListener("click", () =>{
    modal.style.display = "none";
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(()=> {render()}, 300);
    timmerIntervalId = setInterval(()=> {

      let [min, sec] = time.split("-").map(Number);

      if(sec == 59) {
        min += 1;
        sec = 0;
      } else {
        sec += 1;
      }

      time = `${min}-${sec}`;
      timeElement.innerText = time;
    }, 1000);
});

// Restart game
restartButton.addEventListener("click", restarGame);

function restarGame() {

    blocks[`${food.r}-${food.c}`].classList.add("food");
    snake.forEach(segment => {
        blocks[`${segment.r}-${segment.c}`].classList.remove("fill");
    });

    // score after restart the game
    score = 0;
    time = `00-00`;

    scoreElement.innerText = score;
    timeElement.innerText = time;
    highScoreElement.innerText = highScore;


    modal.style.display = "none";
    gameOverModal.style.display = "none";
    startGameModal.style.display = "none";
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    snake.forEach(segment => {
        blocks[`${segment.r}-${segment.c}`]?.classList.remove("fill");
    });
    blocks[`${food.r}-${food.c}`]?.classList.remove("food");
    snake = [{r: 1, c: 3}];
    food = {r:Math.floor(Math.random()* rows), c:Math.floor(Math.random()*cols)}
    direction = "right";
    intervalId = setInterval(()=> {render()}, 300);

}

// Movement
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
