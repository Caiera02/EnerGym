
window.onload = function() {
    var recebeNome = document.getElementById("campoNome")

    var nome = localStorage.nomeUsuario

    recebeNome.textContent = `Olá, ${nome}! Seja bem vindo`

}