// Script para registrar usuários
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Captura os valores do formulário
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        username: username,
        email: email,
        password: password
    }

    localStorage.infoUsuarios = JSON.stringify(user)

    window.location.href = "Login.html"

    console.log(localStorage.infoUsuarios)
});