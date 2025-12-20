let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
let h1 = document.querySelector("#title");

btn.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    let color = `rgb(${red}, ${green}, ${blue})`;

    box.style.background = color;
    h1.style.color = color;
    btn.style.background = color;
});

