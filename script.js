const toDo = document.querySelector("#todo");
const progress = document.querySelector("#in-progress");
const done = document.querySelector("#done");

let tasks = document.querySelectorAll('.task-list');

tasks.forEach(function(task){
    task.addEventListener("drag", function(e){
        // console.log("Dragging", e);
    })
})


function addDragEventOnCol(col){
    col.addEventListener("dragenter", (e) =>{
        col.classList.add("hover")
    })
    col.addEventListener("dragleave", (e) =>{
        col.classList.remove("hover");
    })
}
addDragEventOnCol(toDo);
addDragEventOnCol(progress);
addDragEventOnCol(done);
