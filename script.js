document.querySelector(".clear").addEventListener("click", () => {
  document.querySelector(".result-input").value = "";
  ope = "";
});
var any_sign__not_clicked = false;
var any_sign_double_clicked = false;
var simple_operations = document.querySelectorAll(".simple-ope");
var numbers = document.querySelectorAll(".num");
var ope = "";
var regExp = /^0[0-9].*$/;
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    ope += numbers[i].innerHTML;
    var test = regExp.test(ope);
    if (!test) {
      document.querySelector(".result-input").value = ope;
      any_sign__not_clicked = true;
    } else {
      ope = "";
      ope += numbers[i].innerHTML;
      document.querySelector(".result-input").value = ope;
      any_sign__not_clicked = true;
    }
  });
}
for (let i = 0; i < simple_operations.length; i++) {
  simple_operations[i].addEventListener("click", () => {
    if (ope) {
      if (any_sign__not_clicked) {
        ope += simple_operations[i].innerHTML;
        document.querySelector(".result-input").value = ope;
        any_sign__not_clicked = false;
      }
      any_sign_double_clicked = false;
      if (!any_sign_double_clicked) {
        ope = ope.slice(0, -1);
        ope += simple_operations[i].innerHTML;
        document.querySelector(".result-input").value = ope;
        any_sign_double_clicked = true;
      }
    }
  });
}
document.querySelector(".sign").addEventListener("click", () => {
  if (ope) {
    if (eval(ope) > 0) {
      ope = "-" + ope;
      document.querySelector(".result-input").value = ope;
    } else {
      ope = Math.abs(eval(ope));
      document.querySelector(".result-input").value = ope;
    }
  }
});
document.querySelector(".percentage").addEventListener("click", () => {
  if (ope) {
    ope = eval(ope) / 100;
    document.querySelector(".result-input").value = ope;
  }
});
document.querySelector(".equal").addEventListener("click", (e) => {
  document.querySelector(".result-input").value = eval(ope);
  ope = eval(ope);
  // console.log(e.target.id)
});

