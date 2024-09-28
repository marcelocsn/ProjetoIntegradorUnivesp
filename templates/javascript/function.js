document.addEventListener('DOMContentLoaded', function () {
    // Função para aumentar o tamanho da fonte
    document.getElementById('increaseFontBtn').addEventListener('click', function () {
        var bodyStyle = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
        var currentSize = parseFloat(bodyStyle);
        document.body.style.fontSize = (currentSize + 2) + 'px'; // Aumenta o tamanho da fonte em 2px
    });

    // Função para alternar para o modo escuro
    document.getElementById('darkModeBtn').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode'); // Alterna a classe "dark-mode"
    });
});
