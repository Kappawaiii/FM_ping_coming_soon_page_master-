const button = document.getElementById("notify");

button.onclick = function () {
  let email = document.getElementById("input").value;
  console.log(email);

  if (email.includes("@") && email.includes(".com")) {
    console.log("pass");
  } else {
    console.log("fail");
  }
};
