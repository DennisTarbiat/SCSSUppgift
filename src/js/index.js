const toggleBtn = document.querySelectorAll(".arrow");
const unToggleBtn = document.querySelectorAll(".arrow2");
const moreText = document.querySelectorAll(".moreText");
const option = document.querySelectorAll(".option");

for (let i = 0; i < toggleBtn.length; i++) {
  toggleBtn[i].addEventListener("click", (e) => {
    let nextSibling = toggleBtn[i].nextElementSibling;

    if (moreText[i].classList.contains("hidden")) {
      option[i].classList.add("visible");
      moreText[i].classList.remove("hidden");
      toggleBtn[i].classList.add("hidden");
      nextSibling.classList.remove("hidden");
    }
  });
}

for (let i = 0; i < unToggleBtn.length; i++) {
  unToggleBtn[i].addEventListener("click", (e) => {
    let previousSibling = unToggleBtn[i].previousElementSibling;

    if (!moreText[i].classList.contains("hidden")) {
      moreText[i].classList.add("hidden");
      option[i].classList.remove("visible");
      unToggleBtn[i].classList.add("hidden");
      previousSibling.classList.remove("hidden");
    }
  });
}
