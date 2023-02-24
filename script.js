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

voltar.addEventListener("click", fecharNavegacao)
function fecharNavegacao() {
    nav.style.display = "none";
}
