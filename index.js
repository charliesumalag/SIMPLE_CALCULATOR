"strict";
let inputEl = document.getElementById("input");
let outputEl = document.getElementById("output");
let btns = document.querySelectorAll(".btn-num");
let btnEqals = document.querySelectorAll(".btn-equals");

inputEl.value = "0";
outputEl.value = "";
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML === "cls") {
      clear();
    } else if (btn.innerHTML === "del") {
      dele();
      if (outputEl.value === "") {
        inputEl.value === "hello";
      } else {
        inputEl.value = eval(outputEl.value);
      }
    } else if (
      btn.innerHTML === "+" ||
      btn.innerHTML === "/" ||
      btn.innerHTML === "*" ||
      btn.innerHTML === "-"
    ) {
      inputEl.value = eval(outputEl.value);
      outputEl.value += btn.innerHTML;
    } else if (btn.innerHTML === "=") {
      inputEl.value = eval(outputEl.value);
      outputEl.value = eval(outputEl.value);
    } else {
      if (typeof btn.innerHTML === "string") {
      }
      outputEl.value += btn.innerHTML;
    }
  });
});

function clear() {
  outputEl.value = "";
  inputEl.value = "";
}
function dele() {
  let str = outputEl.value;
  outputEl.value = str.substring(0, str.length - 1);
}
function evaluate(input, output) {
  inputEl.value = eval(outputEl.value);
  outputEl.value = eval(outputEl.value);
}
