const toDo = document.querySelector("#todo");
const progress = document.querySelector("#in-progress");
const done = document.querySelector("#done");

const tasks = document.querySelectorAll(".task-list");

tasks.forEach(task => {
    task.setAttribute("draggable", "true");

    task.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", e.target.id);
    });
});

function addDragEvOnColumn(col) {
    if (!col) return;

    col.addEventListener("dragover", e => {
        e.preventDefault();
    });

    col.addEventListener("dragenter", e => {
        e.preventDefault();
        col.classList.add("hover");
    });

    col.addEventListener("dragleave", () => {
        col.classList.remove("hover");
    });

    col.addEventListener("drop", e => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const task = document.getElementById(id);
        col.appendChild(task);
        col.classList.remove("hover");
    });
}

[toDo, progress, done].forEach(addDragEvOnColumn);
