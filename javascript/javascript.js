function openNav() {
  document.getElementById("mySidebar").style.left = "0";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.left = "-250px";
  document.getElementById("main").style.marginLeft = "0";
}

function mudarFonte(fonte) {
  document.getElementById("pagina").style.fontFamily = fonte;
}

// Lista de imagens com título, data, descrição e tamanho customizado
const imagens = [
  {
    src: "imagem/5.png",
    titulo: "Jogo Da Fazenda",
    data: "ao longo do ano 2024",
    descricao: "Projeto desenvolvido na disciplina de topicos especiais.",
    largura: "400px",
    altura: "auto"
  },
  {
    src: "imagem/6.png",
    titulo: "crime scene erasethecrime",
    data: "Maio de 2024",
    descricao: "Projeto desenvolvido na disciplina de progamaçao de jogos 3D.",
    largura: "300px",
    altura: "auto"
  },
  {
    src: "imagem/7.png",
    titulo: "terra de sol e sangue",
    data: "Maio de 2025",
    descricao: "Projeto de conclusao de curso.",
    largura: "400px",
    altura: "auto"
  },
  {
    src: "imagem/8.png",
    titulo: "Nightmare Critters",
    data: "Março de 2025",
    descricao: "Projeto desenho sprites.",
    largura: "50%",
    altura: "auto"
  }
];

let indiceAtual = 0;
const imagensPorTela = 3;

function exibirImagens() {
  const container = document.getElementById("carrossel-imagens");
  container.innerHTML = "";

  for (let i = 0; i < imagensPorTela; i++) {
    const index = (indiceAtual + i) % imagens.length;
    const imagemInfo = imagens[index];
    const img = document.createElement("img");

    img.src = imagemInfo.src;
    img.alt = imagemInfo.titulo;
    img.title = imagemInfo.descricao;

    // Imagem clicável com pop-up
    img.onclick = function () {
      const popup = window.open("", `popup${index}`, "width=850,height=700,resizable=yes,scrollbars=yes");

      if (popup) {
        popup.document.write(`
          <html>
            <head>
              <title>${imagemInfo.titulo}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  padding: 20px;
                }
                img {
                  width: ${imagemInfo.largura};
                  height: ${imagemInfo.altura};
                  border-radius: 8px;
                  display: block;
                  margin-bottom: 15px;
                }
                h1 {
                  margin-top: 0;
                }
                .info {
                  margin-bottom: 10px;
                }
              </style>
            </head>
            <body>
              <h1>${imagemInfo.titulo}</h1>
              <div class="info"><strong>Data de criação:</strong> ${imagemInfo.data}</div>
              <img src="${imagemInfo.src}" alt="${imagemInfo.titulo}">
              <p><strong>Descrição:</strong> ${imagemInfo.descricao}</p>
            </body>
          </html>
        `);
        popup.document.close();
        popup.focus();
      } else {
        alert("Por favor, permita pop-ups para visualizar as informações.");
      }
    };

    container.appendChild(img);
  }
}

function mudarImagens(direcao) {
  indiceAtual = (indiceAtual + direcao * imagensPorTela + imagens.length) % imagens.length;
  exibirImagens();
}

document.addEventListener("DOMContentLoaded", exibirImagens);
