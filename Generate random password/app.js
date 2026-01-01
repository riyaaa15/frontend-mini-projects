let pass = document.querySelector("#password");
let generatePass = document.querySelector("button");

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*_~|/-=";
let length = 12;

generatePass.addEventListener("click", () => {
    let password = "";

    for(let i=0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length);
        let char = characters[index];
        password += char;
    }
    pass.value = password;
});

let copy = document.querySelector("#copyImg")

copy.addEventListener("click", (e)=> {
    e.stopPropagation();
    if(pass.value === "") return;
    navigator.clipboard.writeText(pass.value);
});
