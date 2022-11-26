const showMessage = document.querySelector(".showAfter");
const hideMessage = document.querySelector(".showBefore");
const submitBtn = document.querySelector("#button");

submitBtn.addEventListener("click", () => {
  console.log("hej");
  showMessage.classList.remove("hidden");
  hideMessage.classList.add("hidden");
});
