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
