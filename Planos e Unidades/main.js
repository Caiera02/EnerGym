// Selecionando os elementos
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');
const carousel = document.querySelector('.carousel');

// Criando os botões de navegação
prevButton.classList.add('carousel-button', 'prev');
prevButton.innerText = '←';
nextButton.classList.add('carousel-button', 'next');
nextButton.innerText = '→';

// Adicionando os botões ao contêiner do carrossel
carousel.parentElement.appendChild(prevButton);
carousel.parentElement.appendChild(nextButton);

let currentIndex = 0;

// Função para mostrar o carrossel na posição correta
function showCarousel(index) {
    const totalUnits = document.querySelectorAll('.unit').length;
    if (index >= totalUnits) {
        currentIndex = 0; // Retorna para o início do carrossel
    } else if (index < 0) {
        currentIndex = totalUnits - 1; // Vai para o final do carrossel
    }

    carousel.style.transform = `translateX(-${currentIndex * 320}px)`; // Ajuste do valor de 320px para a largura de cada unidade
}

// Função para avançar no carrossel
nextButton.addEventListener('click', () => {
    currentIndex++;
    showCarousel(currentIndex);
});

// Função para voltar no carrossel
prevButton.addEventListener('click', () => {
    currentIndex--;
    showCarousel(currentIndex);
});

// Iniciar o carrossel
showCarousel(currentIndex);