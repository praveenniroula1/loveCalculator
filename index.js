let percent = "";
const displayLove = document.getElementById("display");
const button = document.getElementById("button");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
let input1Value = "";
let input2Value = "";
const handleOnClick = () => {
  input1.addEventListener("change", () => {
    input1Value = input1.value;
  });
  input2.addEventListener("change", () => {
    input2Value = input2.value;
  });
};
handleOnClick();

const displayLoveScreen = () => {
  button.addEventListener("click", () => {
    const loveData = Math.random() * 100;
    const percentValue = Math.floor(loveData);
    const percent = percentValue;
    window.scrollTo(0, 0);
    if (input1Value && input2Value && percent >= 50) {
      displayLove.innerHTML =
        "Congratulaion!!!" +
        " " +
        input1Value +
        " " +
        "and" +
        " " +
        input2Value +
        " " +
        "have compatibility of only " +
        percent +
        "%.";
    } else {
      displayLove.innerHTML =
        "Opps!!!" +
        " " +
        input1Value +
        " " +
        "and" +
        " " +
        input2Value +
        " " +
        "have compatibility of only " +
        percent +
        "%.";
    }
  });
};

displayLoveScreen();
