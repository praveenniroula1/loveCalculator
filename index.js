let percent = "";
const displayLove = document.getElementById("display");

const button = document.getElementById("button");

const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const dataDisplay = () => {
  const input1 = document.getElementById("input1");
  input1.addEventListener("change", () => {
    const inputData = input1.value;
    h2.innerText = inputData;
    console.log(h2.innerText);
    return h2.innerText;
  });
};
dataDisplay();
console.log(h2.innerText);
const inputData = () => {
  const input2 = document.getElementById("input2");
  input2.addEventListener("change", () => {
    const input2Data = input2.value;
    h3.innerText = input2Data;
    console.log(h3.innerText);
  });
};
inputData();
const displayLoveScreen = () => {
  button.addEventListener("click", () => {
    const loveData = Math.random() * 100;
    const percentValue = Math.floor(loveData);
    const percent = percentValue;
    window.scrollTo(0, 0);

    if (percent >= 50) {
      displayLove.innerHTML =
        "Congratuation!!!" +
        dataDisplay() +
        inputData() +
        "have compatibility of " +
        percent +
        "%";
    } else {
      displayLove.innerHTML =
        "Oppssss!!! You Guys have compatibility of only " + percent + "%";
    }
  });
};

displayLoveScreen();
