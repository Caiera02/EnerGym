let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let resultado = document.getElementById('resultado')

const CalculoIMC = () => {
  let pesoInput = peso.value
  let alturaInput = altura.value
  if (pesoInput > 0 && alturaInput > 0) {
    let conta = (pesoInput / (alturaInput*alturaInput))
    console.log(conta);
    resultado.innerHTML = conta.toFixed(2)
  }else{
    resultado.innerHTML = `Número inválido` 
  }
}
