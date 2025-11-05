alert("Bem-vindo(a) à página!");

    const botoes = document.querySelectorAll('.verImagem');

    botoes.forEach(botao => {
      botao.addEventListener('click', () => {
        const container = botao.nextElementSibling;
        const img = container.querySelector('img');
        if (container.style.display === "none") {
          img.src = botao.getAttribute('data-img');
          container.style.display = "block";
          botao.textContent = "Ocultar imagem";
        } else {
          container.style.display = "none";
          img.src = "";
          botao.textContent = "Ver imagem";
        }
        }
                             };
// ================================
// Funções simples para o site
// ================================

// Mensagem de boas-vindas quando o site carrega
window.addEventListener('DOMContentLoaded', () => {
  console.log("Site carregado com sucesso!");
});

// Botão para rolar até o topo (criado dinamicamente)
const topoBtn = document.createElement("button");
topoBtn.textContent = "↑ Topo";
topoBtn.className = "btn btn-primary position-fixed";
topoBtn.style.bottom = "20px";
topoBtn.style.right = "20px";
topoBtn.style.display = "none";
topoBtn.style.zIndex = "1000";
document.body.appendChild(topoBtn);

// Mostrar o botão ao rolar para baixo
window.addEventListener("scroll", () => {
  topoBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

// Voltar ao topo quando clicar
topoBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Exemplo de função interativa simples
function mostrarCuriosidade() {
  alert("Curiosidade: as mitocôndrias têm DNA próprio e se reproduzem como bactérias!");
}

// Criar botão de curiosidade no rodapé
const curiosidadeBtn = document.createElement("button");
curiosidadeBtn.textContent = "Ver curiosidade";
curiosidadeBtn.className = "btn btn-outline-light mt-3";
curiosidadeBtn.addEventListener("click", mostrarCuriosidade);
document.querySelector("footer").appendChild(curiosidadeBtn);
