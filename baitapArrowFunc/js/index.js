const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const taoButton = () => {
  for (let i = 0; i < colorList.length; i++) {
    let color = colorList[i];
    let button = document.createElement("button");
    if (i == 0) {
      button.className = "color-button " + color + " active";
    } else {
      button.className = "color-button " + color;
    }
    button.onclick = function () {
      document.querySelector("#house").className = "house " + color;
    };

    document.querySelector("#colorContainer").appendChild(button);
  }

  let btns = document.querySelectorAll(".color-button");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.querySelectorAll(".active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
};

window.onload = function () {
  taoButton();
};
