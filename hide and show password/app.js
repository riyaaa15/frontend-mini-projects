let eyeIcon = document.querySelector("#eyeicon");
let pass = document.querySelector("#pass");

eyeIcon.addEventListener("click", ()=> {
    if(pass.type == "password"){
        pass.type = "text";
        eyeIcon.src = "images/eye-open.png"
    } else {
        pass.type = "password";
        eyeIcon.src = "images/eye-close.png"
    }
})