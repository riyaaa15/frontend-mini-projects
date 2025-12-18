let plusBtn = document.querySelector("#plus");
let minusBtn = document.querySelector("#minus");
let resetBtn = document.querySelector("#reset");
let display = document.querySelector("h2");

let count = 0;

plusBtn.addEventListener("click", ()=>{
    count++;
    display.innerText = count;
});

minusBtn.addEventListener("click", ()=>{
    count--;
    display.innerText = count;
});

resetBtn.addEventListener("click", ()=>{
    count = 0;
    display.innerText = count;
})
