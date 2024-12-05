document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    var nome = document.getElementById("nome").value; // Obtém o nome digitado no campo de texto
    if (nome) {
        // Exibe o modal com a mensagem personalizada
        document.getElementById("mensagemModal").innerText = `Em breve, um de nossos profissionais entrará em contato com você, ${nome}.`;
        document.getElementById("modal").style.display = "flex"; // Mostra o modal
        
        // Limpa os campos do formulário
        document.getElementById("formulario").reset();  // Limpa os campos do formulário
    }
});

function fecharModal() {
    document.getElementById("modal").style.display = "none"; // Fecha o modal quando o botão é clicado
}


// Captura do elemento input que controla o estado do sidebar
const sidebarToggle = document.querySelector('input[type="checkbox"]');
const flexContainer = document.querySelector('.flex'); // A div que contém os botões
const sidebar = document.querySelector('.slide'); // Sidebar

// Função para alternar entre o sidebar e a div de navegação
sidebarToggle.addEventListener('change', () => {
  if (sidebarToggle.checked) {
    // Quando o checkbox estiver marcado (sidebar visível), esconde a navegação
    flexContainer.style.display = 'none';
  } else {
    // Quando o checkbox não estiver marcado (sidebar escondido), mostra a navegação
    flexContainer.style.display = 'block';
  }
});

