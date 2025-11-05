alert("Bem-vindo(a) à página!");

document.querySelectorAll('.verImagem').forEach(botao => {
  botao.addEventListener('click', () => {
    const container = botao.nextElementSibling;
    const img = container.querySelector('img');
    if (container.style.display === "none" || container.style.display === "") {
      img.src = botao.getAttribute('data-img');
      container.style.display = "block";
      botao.textContent = "Ocultar imagem";
    } else {
      container.style.display = "none";
      img.src = "";
      botao.textContent = "Ver imagem";
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  console.log("Site carregado com sucesso!");
});

const topoBtn = document.createElement("button");
topoBtn.textContent = "↑ Topo";
topoBtn.className = "btn btn-primary position-fixed";
Object.assign(topoBtn.style, {
  bottom: "20px",
  right: "20px",
  display: "none",
  zIndex: "1000"
});
document.body.appendChild(topoBtn);

window.addEventListener("scroll", () => {
  topoBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topoBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function mostrarCuriosidade() {
  alert("Curiosidade: as mitocôndrias têm DNA próprio e se reproduzem como bactérias!");
}

const curiosidadeBtn = document.createElement("button");
curiosidadeBtn.textContent = "Ver curiosidade";
curiosidadeBtn.className = "btn btn-outline-light mt-3";
curiosidadeBtn.addEventListener("click", mostrarCuriosidade);

const footer = document.querySelector("footer");
if (footer) footer.appendChild(curiosidadeBtn);
