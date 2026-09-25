// Seleção dos elementos do HTML
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

// Função que altera a mensagem na página
function mostrarMensagem() {
    mensagem.textContent = "Sabias que o primeiro vírus de computador foi criado em 1971 e chamava-se Creeper?";
}

// Executa a função ao clicar no botão
botao.addEventListener("click", mostrarMensagem);
