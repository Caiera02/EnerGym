document.getElementById('loginForm1').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Fetch os dados do JSON
    //fetch(teste).then((response) => {
        // Transforma JSON em OBJ
      //  return response.json();
    //})
      //  .then(users => {
            //const user = users.find(user => user.username === username && user.password === password);

            var user = localStorage.infoUsuarios;

            if(user){
                var parsedUser = JSON.parse(user)

                const messageDiv = document.getElementById('error-msg');
                const saudacaoDiv = document.getElementById('saud')
               
    
                if (parsedUser.username === username && parsedUser.password === password) {
                    messageDiv.textContent = 'Login bem-sucedido!';
                    messageDiv.style.color = "green"
    
                    // Redirecionamento de tela 
                    alert(`${parsedUser.username} Seja Bem vindo a area do aluno!!`)
                    window.location.href = "1Planos.html"
                    localStorage.nomeUsuario = parsedUser.username;
    
                    saudacaoDiv.textContent= `Olá ${user.usuario} ! Você tem [quantidade de pontos1] pontos para trocar em
            recompensas!`
                    //  Olá ! Você tem [quantidade de pontos1] pontos para trocar em recompensas!`
                    //document.getElementsByClassName('saudacao').innerHTML = ``
    
                } else {
                    messageDiv.textContent = 'Usuário ou senha inválidos.';
                    messageDiv.style.color = "red"
                }

            }

       // })

});
