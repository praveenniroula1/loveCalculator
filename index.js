let percent = "";
const displayLove = document.getElementById("display");

const button = document.getElementById("button");

const displayLoveScreen = () => {
  button.addEventListener("click", () => {
    const loveData = Math.random() * 100;
    const percentValue = Math.floor(loveData);
    const percent = percentValue;
    window.scrollTo(0, 0);
    displayLove.innerHTML = "You Guys have compatibility of " + percent + "%";
  });
};
displayLoveScreen();
