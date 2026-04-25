# Snake Game

A browser-based Snake Game built with HTML, CSS, and JavaScript. The player controls the snake using the keyboard, collects food to grow longer, and tries to achieve the highest score before hitting the wall.

The game includes a start screen, game over state, score tracking, a running timer, and high score persistence using `localStorage`.

# Live Demo
https://ssnakegame.vercel.app

## Features

- Classic snake gameplay
- Keyboard controls with arrow keys
- Live score display
- High score saved in browser `localStorage`
- In-game timer
- Start game and restart game modal screens
- Grid-based game board
- Clean dark UI

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`

## Project Structure

```text
0004_Snake Game/
|-- index.html
|-- style.css
|-- script.js
|-- readme.md
```

## How to Play

1. Open the game in your browser.
2. Click the `Start Game` button.
3. Use the arrow keys to control the snake:
   `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`
4. Eat the food to increase your score and grow the snake.
5. Avoid hitting the wall, or the game ends.
6. Click `Restart Game` to play again after game over.

## Game Logic Highlights

- The board is generated as a grid of blocks using JavaScript.
- The snake moves automatically at a fixed interval.
- Food appears at random positions on the board.
- Each food item increases the score by `10`.
- The highest score is stored in `localStorage` and shown every time the game loads.

## Getting Started

1. Download or clone the project.
2. Open `index.html` in a modern web browser.
3. Start playing.

## Learning Highlights

This project is useful for practicing:

- DOM manipulation
- Grid-based game rendering
- Keyboard event handling
- Timers with `setInterval`
- Game state management
- Using `localStorage` for persistent data

## Future Improvements

- Add collision detection with the snake's own body
- Prevent instant reverse movement
- Improve timer formatting to `mm:ss`
- Add difficulty levels and speed control
- Add touch controls for mobile devices
- Add sound effects and pause functionality

## Author
Chandni Rani
Created as part of a web development practice project collection.
