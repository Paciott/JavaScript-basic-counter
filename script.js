const root = document.querySelector("#root");
const h1 = document.createElement("H1");
const counter = document.createElement("div");
const decreaseBtn = document.createElement("button");
const increaseBtn = document.createElement("button");
const reset = document.createElement("button");
let count = 0;

h1.innerText = "Counter";
counter.innerText = count;
decreaseBtn.innerText = "-";
increaseBtn.innerText = "+";
reset.innerText = "Reset";

root.appendChild(h1);
root.appendChild(counter);
root.appendChild(decreaseBtn);
root.appendChild(increaseBtn);
root.appendChild(reset);

counter.classList.add("counter");
decreaseBtn.classList.add("decrease");
increaseBtn.classList.add("increase");
reset.classList.add("reset");

increaseBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerText = count;
  } else {
    return;
  }
});

reset.addEventListener("click", () => {
  count = 0;
  counter.innerText = 0;
});
