let submit = document.querySelector(".btn");
let button = document.querySelector(".okbtn");
let popup = document.querySelector("#popup");

submit.addEventListener('click', ()=>{
    popup.classList.add("open-popup");
});

button.addEventListener("click", ()=>{
    popup.classList.remove("open-popup");
});




