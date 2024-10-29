document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch os dados do JSON
    fetch('teste.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.usuario === username && user.pwd === password);
            const messageDiv = document.getElementById('error-msg');

            if (user) {
                messageDiv.textContent = 'Login bem-sucedido!';
                messageDiv.style.color = "green"
                // Aqui você pode redirecionar ou realizar outras ações
                window.location.href ="index2.html"
            } else {
                messageDiv.textContent = 'Usuário ou senha inválidos.';
                messageDiv.style.color = "red"
            }
            
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});
