const btnMobile = document.querySelector(".imagem_mobile");
const nav = document.querySelector(".container_navegação");

btnMobile.addEventListener("click", adcNavegacao);
function adcNavegacao() {
  nav.style.display = "block";
  nav.style["boxShadow"] = " 10px 4px 4px 0px #00000040";
  nav.style.position = "absolute";
  btnMobile.style.position = "relative";
}

const voltar = document.querySelector(".fechar");

voltar.addEventListener("click", fecharNavegacao);
function fecharNavegacao() {
  nav.style.display = "none";
}
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
