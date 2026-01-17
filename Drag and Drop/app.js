let lists = document.querySelectorAll(".list");
let leftBox = document.querySelector("#left");
let rightBox = document.querySelector("#right");

let draggedItem = null;

lists.forEach(item => {
    item.addEventListener("dragstart", () => {
        draggedItem = item;
    });
});


function allowDrop(box) {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop", () => {
        box.appendChild(draggedItem);
    });
}

allowDrop(leftBox);
allowDrop(rightBox);
