const inputSlider = document.getElementById("input-slider");
const sliderValue = document.getElementById("slider-value");
const passBox = document.getElementById("pass-box");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("get-btn");
const copyIcon = document.getElementById("copy-icon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

function generatePassword() {
  const length = inputSlider.value;
  let char = "";
  let pass = "";

  char += lowercaseEl.checked ? lowercaseLetters : "";
  char += uppercaseEl.checked ? uppercaseLetters : "";
  char += numberEl.checked ? numbers : "";
  char += symbolsEl.checked ? symbols : "";
  for (let i = 0; i < length; i++) {
    pass += char.charAt(Math.floor(Math.random() * char.length));
  }
  return pass;
}
