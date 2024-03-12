const button = document.getElementById("notify");
const buttonError = document.getElementsByClassName("notifyError");
const buttonPass = document.getElementsByClassName("notifyPass");
const passInput = document.getElementsByClassName("pass");
const errorInput = document.getElementsByClassName("error");
const failMessage = document.getElementById("errorMessage");
const input = document.getElementById("input");
button.onclick = function () {
  let email = document.getElementById("input").value;
  console.log(email);

  if (email.includes("@") && email.includes(".com")) {
    buttonPass.style.visibility = "visible";
    passInput.style.visibility = "visible";
    button.style.visibility = "hidden";
    input.style.visibility = "hidden";
  } else {
    failMessage.style.hidden = visible;
    console.log("fail");
  }
};
