let percent = "";
const displayLove = document.getElementById("display");

const button = document.getElementById("button");

const handleOnChange = () => {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  console.log(input1, input2);
};

const displayLoveScreen = () => {
  button.addEventListener("click", () => {
    const loveData = Math.random() * 100;
    const percentValue = Math.floor(loveData);
    const percent = percentValue;
    window.scrollTo(0, 0);
    if (percent >= 50) {
      displayLove.innerHTML =
        "Congratuation!!! You Guys have compatibility of " + percent + "%";
    } else {
      displayLove.innerHTML =
        "Oppssss!!! You Guys have compatibility of only " + percent + "%";
    }
  });
};

displayLoveScreen();
