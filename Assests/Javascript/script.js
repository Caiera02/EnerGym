document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch os dados do JSON
    fetch ('login.json').then((response) =>{
        // Transforma JSON em OBJ
        return response.json();
    })
    .then(users => {
        const user = users.find(user => user.usuario === username && user.pwd === password);
        const messageDiv = document.getElementById('error-msg');

        if (user) {
            messageDiv.textContent = 'Login bem-sucedido!';
            messageDiv.style.color = "green"
            // Redirecionamento de tela 
            alert(`${user.usuario} Seja Bem vindo a area do aluno!!`)
                     
        } else {
            messageDiv.textContent = 'Usuário ou senha inválidos.';
            messageDiv.style.color = "red"
        }
        
    })

});