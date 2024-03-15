const button = document.getElementById("notify");
const message = document.getElementById("errorMessage");
const input = document.getElementById("input");

button.onclick = function () {
  let email = document.getElementById("input").value;
  console.log(email);

  if (email.includes("@")) {
    console.log("pass");
    if (
      email.includes(".com") ||
      email.includes(".org") ||
      email.includes(".gov")
    ) {
      input.style.borderColor = "rgb(46, 204, 114)";
      button.style.borderColor = "rgb(46, 204, 114)";
      button.style.backgroundColor = "rgb(46, 204, 114)";
      button.style.color = "white";
    }
  } else {
    console.log("fail");
    input.style.borderColor = "red";
    button.style.borderColor = "red";
    button.style.backgroundColor = "red";
    button.style.color = "white";
    message.style.visibility = "visible";
  }
};
