let btn  = document.querySelector(".btn");
let generate = document.querySelector(".generate");
let container = document.querySelector(".container");

let timeoutId;
let intervalId;

let otp;
generate.addEventListener("click", () => {
    generate.innerText = "Generate OTP";
    otp = Math.floor(Math.random() * 900000) + 100000;
    btn.innerText = otp;

    clearTimeout(timeoutId);
    clearInterval(intervalId);

    generate.disabled = true;
    generate.style.background = "#54525eff";
    let time = 21;
    intervalId = setInterval(() => {
        time--;

        if(time === 0) {
            btn.innerText = "OTP expired"; 
            generate.innerText = "Resend again OTP";
            clearInterval(intervalId);
             generate.disabled = false;
             generate.style.background = "#3a6aef"; 
        }
    }, 1000);
   
});

let copyBtn = document.createElement("button");
copyBtn.innerText = "Copy OTP";
copyBtn.classList.add("copy");
container.appendChild(copyBtn);

copyBtn.addEventListener("click", () => {
    if(btn.innerText === "OTP expired") return;
    navigator.clipboard.writeText(btn.innerText);
    alert("OTP copied!");
});

let userOtp = document.querySelector("input");
let verify = document.querySelector(".verify");

verify.addEventListener("click", () => {
      let printResult = document.querySelector(".result");

      if( btn.innerText === "OTP expired"){
        printResult.innerText = "⏰opps! your time is out try again."
        printResult.style.color  = "red";
    } else if(userOtp.value === otp.toString()) {
        printResult.innerText = "✅ OTP verified successfully!";
        printResult.style.color = "green";
         clearInterval(intervalId);
    } else if(userOtp.value === ""){
        printResult.innerText = "Please enter OTP first!";
        printResult.style.color = "#f97316";
    } else {
        printResult.innerText = "⚠️ Incorrect OTP. Please check and enter again.";
        printResult.style.color = "red";
        clearInterval(intervalId);
    }
});