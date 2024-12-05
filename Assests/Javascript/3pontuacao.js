window.onload = function() {
    var recebeNome = document.getElementById("campoNome")

    var nome = localStorage.nomeUsuario

    if(nome === 'Caio'){
      recebeNome.textContent = `Olá ${nome}! Você tem 350 pontos para trocar em
      recompensas!`;
    }else{

    recebeNome.textContent = `Olá ${nome}! Você tem 0 pontos para trocar em
    recompensas!`;
    }
}