// Seleção dos elementos do HTML
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

// Função que altera o texto da página
function mostrarMensagem() {
    mensagem.textContent = "Sabias que o primeiro vírus de computador foi criado em 1971 e chamava-se Creeper?";
}

// Adiciona o evento de clique ao botão
botao.addEventListener("click", mostrarMensagem);
