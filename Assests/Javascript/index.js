document.getElementById('my-Form').addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    var contar = peso /(altura * altura)
    // alert(` O seu IMC é ${contar}`)

    const result = document.getElementById('result');
    result.innerText = `O Seu IMC é de ${contar.toFixed(1)}`;
});
