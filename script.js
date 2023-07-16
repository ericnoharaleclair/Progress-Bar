import { INIT_CIRCLE, FINAL_CIRCLE, PROGRESS_PERCENT } from "/config.js";

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let curActive = INIT_CIRCLE;

next.addEventListener("click", function () {
  //guard clause: if progress is at final circle
  if (curActive === FINAL_CIRCLE) return;
  //if progress is at first circle, enable the prev button
  if (curActive === INIT_CIRCLE) prev.classList.remove("disabled");

  //handle the progress visuals
  curActive++;
  setTimeout(() => circles[curActive].classList.add("active"), 300);
  progress.style.width = `${PROGRESS_PERCENT * curActive}%`;

  //if progress is at the final circle, disable next button
  if (curActive === FINAL_CIRCLE) next.classList.add("disabled");
});

prev.addEventListener("click", function () {
  //guard clause: if progress is at first circle
  if (curActive === INIT_CIRCLE) return;
  //if progress is at final circle, enable the next button
  if (curActive === FINAL_CIRCLE) next.classList.remove("disabled");

  //handle the progress visuals
  circles[curActive].classList.remove("active");
  curActive--;
  progress.style.width = `${PROGRESS_PERCENT * curActive}%`;

  //if progress is at the first circle, disable next button
  if (curActive === INIT_CIRCLE) prev.classList.add("disabled");
});
