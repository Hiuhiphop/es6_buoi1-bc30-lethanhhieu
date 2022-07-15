let math = document.querySelector("#inpToan");
let physic = document.querySelector("#inpLy");
let chemistry = document.querySelector("#inpHoa");
let literature = document.querySelector("#inpVan");
let history = document.querySelector("#inpSu");
let geography = document.querySelector("#inpDia");
let eng = document.querySelector("#inpEnglish");

export const checkValidity1 = () => {
  if (!math.value || Number(math.value) > 10 || !Number(math.value)) {
    alert("điểm toán không hợp lệ !");
    return 1;
  }

  if (!physic.value || Number(physic.value) > 10 || !Number(physic.value)) {
    alert("điểm lý không hợp lệ !");
    return 1;
  }

  if (
    !chemistry.value ||
    Number(chemistry.value) > 10 ||
    !Number(chemistry.value)
  ) {
    alert("điểm hóa không hợp lệ !");
    return 1;
  }
};

export const checkValidity2 = () => {
  if (
    !literature.value ||
    Number(literature.value) > 10 ||
    !Number(literature.value)
  ) {
    alert("điểm văn không hợp lệ !");
    return 1;
  }

  if (!history.value || Number(history.value) > 10 || !Number(history.value)) {
    alert("điểm sử không hợp lệ !");
    return 1;
  }

  if (
    !geography.value ||
    Number(geography.value) > 10 ||
    !Number(geography.value)
  ) {
    alert("điểm địa không hợp lệ !");
    return 1;
  }

  if (!eng.value || Number(eng.value) > 10 || !Number(eng.value)) {
    alert("điểm anh không hợp lệ !");
    return 1;
  }
};
