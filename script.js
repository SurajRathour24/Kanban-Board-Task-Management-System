const toDo = document.querySelector("#todo");
const progress = document.querySelector("#in-progress");
const done = document.querySelector("#done");

let draggerItem = null;

let tasks = document.querySelectorAll('.task-list');

tasks.forEach(function(task){
    task.addEventListener("drag", function(e){
        // console.log("Dragging", e);
        draggerItem = task
    })
})


function addDragEventOnCol(col){
    col.addEventListener("dragenter", (e) =>{
        col.classList.add("hover")
    })
    col.addEventListener("dragleave", (e) =>{
        col.classList.remove("hover");
    })

    col.addEventListener("dragover", (e) =>{
        e.preventDefault();
    })

    col.addEventListener("drop", (e) =>{
        e.preventDefault();
        col.appendChild(draggerItem);
        col.classList.remove("hover");
    })
}
addDragEventOnCol(toDo);
addDragEventOnCol(progress);
addDragEventOnCol(done);
