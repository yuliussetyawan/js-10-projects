const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");
const visibilityImg = document.querySelector("img");

password.addEventListener("input", () => {
  const passwordValue = password.value;
  const passwordLength = passwordValue.length;

  let passwordStrength = "";

  if (passwordLength < 5) {
    passwordStrength = "weak";
  } else if (passwordLength < 10) {
    passwordStrength = "medium";
  } else {
    passwordStrength = "strong";
  }
  message.style.display = "block";
  strength.textContent = passwordStrength;
});

submitButton.addEventListener("click", () => {
  const passwordType = password.getAttribute("type");
  if (passwordType === "password") {
    password.setAttribute("type", "text");
    visibilityImg.src = "./images/visibility_off.svg";
  } else {
    password.setAttribute("type", "password");
    visibilityImg.src = "./images/visibility_on.svg";
  }
});
