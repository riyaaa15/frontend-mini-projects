let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btns button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        let value = btn.innerText;

        if(value === "AC") {   //All Clear
            display.value = "";
        }
        else if(value === "C"){   //Clear last character
            display.value = display.value.slice(0, -1);
        }
        else if(value === "=") {    //Result
            try{
                display.value = eval(display.value);
            } catch {
                display.value = "ERROR";
            }
        }
        else{
            display.value += value;
        }
    });
});