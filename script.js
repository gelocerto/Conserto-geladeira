 const imagens = document.querySelectorAll('.carrossel img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let indice = 0;

    function mostrarImagem(index) {
        imagens.forEach(img => img.classList.remove('ativo'));
        imagens[index].classList.add('ativo');
    }

    function proximaImagem() {
        indice = (indice + 1) % imagens.length;
        mostrarImagem(indice);
    }

    function imagemAnterior() {
        indice = (indice - 1 + imagens.length) % imagens.length;
        mostrarImagem(indice);
    }

    nextBtn.addEventListener('click', proximaImagem);
    prevBtn.addEventListener('click', imagemAnterior);

    // Troca automática a cada 3 segundos
    setInterval(proximaImagem, 3000);