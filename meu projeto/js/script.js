alert("Bem-vindo(a) à página! (˶ᵔ ᵕ ᵔ˶)");

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
      console.log("Site carregado");
    });

    const topoBtn = document.createElement("button");
    topoBtn.id = "topoBtn";
    topoBtn.textContent = "↑ Topo";
    topoBtn.className = "btn btn-primary position-fixed";
    topoBtn.style.bottom = "20px";
    topoBtn.style.right = "20px";
    document.body.appendChild(topoBtn);

    window.addEventListener("scroll", () => {
      topoBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    topoBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
