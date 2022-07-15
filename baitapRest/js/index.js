import { checkValidity1, checkValidity2 } from "./validation.js";
let math = document.querySelector("#inpToan");
let physic = document.querySelector("#inpLy");
let chemistry = document.querySelector("#inpHoa");
let literature = document.querySelector("#inpVan");
let history = document.querySelector("#inpSu");
let geography = document.querySelector("#inpDia");
let eng = document.querySelector("#inpEnglish");

function avgScore(...scores) {
  let sum = 0;
  let avg = 0;
  scores.forEach((score) => {
    sum += score;
  });
  return (avg = sum / scores.length);
}
// khối 1
document.querySelector("#btnKhoi1").onclick = function () {
  let check = checkValidity1();
  if (check == 1) {
    return;
  }
  let mathScore = Number(math.value);
  let physicScore = Number(physic.value);
  let chemistryScore = Number(chemistry.value);
  document.querySelector("#tbKhoi1").innerHTML = avgScore(
    mathScore,
    physicScore,
    chemistryScore
  ).toFixed(2);
};

// khối 2
document.querySelector("#btnKhoi2").onclick = function () {
  let check = checkValidity2();
  if (check == 1) {
    return;
  }
  let literatureScore = Number(literature.value);
  let historyScore = Number(history.value);
  let geographyScore = Number(geography.value);
  let engScore = Number(eng.value);
  document.querySelector("#tbKhoi2").innerHTML = avgScore(
    literatureScore,
    historyScore,
    geographyScore,
    engScore
  ).toFixed(2);
};
