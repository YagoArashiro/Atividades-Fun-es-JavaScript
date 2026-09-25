const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");
function mostrarMensagem() {
    mensagem.textContent = "Sabias que o primeiro vírus de computador foi criado em 1971 e chamava-se Creeper?";
}
botao.addEventListener("click", mostrarMensagem);
