let box = `<div class="box"></div>`;
let btn = document.getElementsByTagName("button")[0];
let container = document.querySelector(".container");
let boxIdx = 0;

console.log("out ", boxIdx);
localStorage.setItem(boxIdx, box);

window.addEventListener("DOMContentLoaded",() => {


btn.addEventListener("click", () => {
  container.insertAdjacentHTML("beforeend", box);
  boxIdx = container.innerHTML.trim().split("\n");
  boxIdx = boxIdx[1].split("</div><div").length;
  console.log("in ", boxIdx);
  localStorage.setItem(boxIdx ,box)
});

    for (let i = 0; i < localStorage.length; i++) {
        const element = localStorage[i];
        container.insertAdjacentHTML("beforeend",element)
    }

})
