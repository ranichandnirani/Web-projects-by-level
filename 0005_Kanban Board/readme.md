# Kanban Board

A simple Kanban Board project built with HTML, CSS, and JavaScript. It helps users organize tasks into three workflow stages: `To Do`, `In Progress`, and `Done`.

The board supports adding new tasks through a modal, moving tasks between columns with drag and drop, deleting tasks, and saving task data in `localStorage` so progress remains available after refresh.

## Features

- Create new tasks with a title and description
- Organize tasks into `To Do`, `In Progress`, and `Done`
- Drag and drop tasks between columns
- Delete tasks when they are no longer needed
- Automatic task count for each column
- Persistent storage using browser `localStorage`
- Clean dark-themed interface

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`

## Project Structure

```text
0005_Kanban Board/
|-- index.html
|-- style.css
|-- script.js
|-- readme.md
```

## How It Works

1. Click the `Add new Task` button to open the task modal.
2. Enter the task title and description.
3. Add the task to the board. New tasks are placed in the `To Do` column.
4. Drag tasks across columns to update their status.
5. Delete tasks using the `Delete` button on each card.
6. The board automatically updates counts and stores tasks in `localStorage`.

## Getting Started

1. Download or clone the project.
2. Open `index.html` in any modern web browser.
3. Start adding and managing tasks.

## Learning Highlights

This project is a good practice build for:

- DOM manipulation
- Event handling
- Drag and drop interactions
- Modal UI behavior
- Working with browser storage
- Updating UI dynamically based on user actions

## Future Improvements

- Add due dates and priority labels
- Allow editing existing tasks
- Add custom column creation
- Improve mobile responsiveness
- Add validation for empty task input

## Author

CHANDNI RANI
Created as part of a web development practice project collection.
