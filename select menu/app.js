let selectFeild = document.querySelector("#selectFeild");
let selectText = document.querySelector("#selectText");
let options = document.querySelectorAll(".options");
let list = document.querySelector("#list");
let arrowIcon = document.querySelector("#arrowIcon");

selectFeild.addEventListener("click", ()=> {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
});

for (let option of options) {
  option.addEventListener("click", function () {
    selectText.innerHTML = this.querySelector("p").textContent;
      list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
  });
}
