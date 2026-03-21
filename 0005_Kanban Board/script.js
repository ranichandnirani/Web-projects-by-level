const todo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let dragElement = null;

// console.log(todo, progress, done);

const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        // console.log("dragging", e);
        dragElement = task;
    });
});

function addDragEventsOnColumn(column) {

    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();

        console.log("dropped", dragElement, column)

        column.appendChild(dragElement);
        column.classList.remove("hover-over");


        [ todo, progress, done ].forEach(col => {
            const tasks = col.querySelectorAll(".task");
            const count = col.querySelector(".right");

            count.innerText = tasks.length;
        });
    });
}
    
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// modal logic

const toggleModalButton = document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskButton = document.querySelector("#add-new-task");

toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active")
});

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
});

addTaskButton.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title-input").value
    const taskDisc = document.querySelector("#task-disc-input").value

    const div = document.createElement("div");

    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
        <h2>${taskTitle}</h2>
        <p>${taskDisc}</p>
        <button>Delete</button>
    `
    todo.appendChild(div);
    div.addEventListener("drag", (e) => {
        dragElement = div;
    });

    modal.classList.remove("active");
});