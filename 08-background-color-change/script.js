const body = document.body;
const hexCode = document.querySelector(".hex-code");

body.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
  console.log(hexCode);
  hexCode.textContent = randomColor;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}
