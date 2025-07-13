document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'carrossel-placeholder'
    const carouselPlaceholders = document.querySelectorAll('.carrossel-placeholder');

    // Itera sobre cada placeholder encontrado para criar um carrossel independente
    carouselPlaceholders.forEach(placeholder => {
        // Seleciona todas as imagens dentro do carrossel atual
        const carouselImages = placeholder.querySelectorAll('.carousel-slides img');
        let currentIndex = 0; // Índice da imagem atualmente visível
        const intervalTime = 5000; // Tempo em milissegundos para a troca (3 segundos)

        // Se houver imagens, exibe a primeira imagem ao carregar a página
        if (carouselImages.length > 0) {
            carouselImages[currentIndex].classList.add('active');
        }

        // Função para mostrar a próxima imagem
        function showNextImage() {
            // Remove a classe 'active' da imagem atual, escondendo-a
            carouselImages[currentIndex].classList.remove('active');

            // Calcula o índice da próxima imagem (loop infinito)
            currentIndex = (currentIndex + 1) % carouselImages.length;

            // Adiciona a classe 'active' à próxima imagem, mostrando-a
            carouselImages[currentIndex].classList.add('active');
        }

        // Inicia o autoplay se houver mais de uma imagem para alternar
        if (carouselImages.length > 1) {
            setInterval(showNextImage, intervalTime);
        }
    });
});