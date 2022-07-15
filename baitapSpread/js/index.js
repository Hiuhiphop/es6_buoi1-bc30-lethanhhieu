const str = document.querySelector(".heading").innerHTML;

let chars = [...str];
const taoSpan = (arr) => {
  let html = "";
  for (let i = 0; i < arr.length; i++) {
    html += `<span>${arr[i]}</span>`;
  }
  document.querySelector(".heading").innerHTML = html;
};

window.onload = function () {
  taoSpan(chars);
};
