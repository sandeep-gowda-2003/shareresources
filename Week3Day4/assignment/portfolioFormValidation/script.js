function validate(e) {
  e.preventDefault();
  let uName = document.querySelector("#name").value;
  let uEmail = document.querySelector("#email").value;
  let uMessage = document.querySelector("#message").value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (
    uName.trim() &&
    emailPattern.test(uEmail) &&
    uMessage.trim().length >= 10
  ) {
  } else {
    let error = document.querySelector("#error");
    error.innerText = "Input is Invalid please fill the form correctly";
    console.log("Input is Invalid please fill the form correctly");
  }
}
