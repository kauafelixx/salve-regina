const bottom = document.getElementById("btn-voltar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        bottom.style.display = "block";
    } else {
        bottom.style.display = "none";
    }
})

bottom.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
