document.addEventListener('DOMContentLoaded', () => {
    const botaoAdicionar = document.querySelector('.btn-esquerda');

    if (botaoAdicionar) {
        botaoAdicionar.addEventListener('click', () => {
            const mesAno = prompt('Digite o mês e ano (ex: MAR-2025):');
            const itens = prompt('Digite os itens separados por vírgula:').split(',');

            if (!mesAno || itens.length === 0) return;

            const ponto = document.createElement('div');
            ponto.classList.add('ponto');

            const bolinha = document.createElement('div');
            bolinha.classList.add('bolinha');

            const info = document.createElement('div');
            info.classList.add('info');

            const titulo = document.createElement('h3');
            titulo.textContent = mesAno;

            const lista = document.createElement('ul');
            itens.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.trim();
                lista.appendChild(li);
            });

            info.appendChild(titulo);
            info.appendChild(lista);
            ponto.appendChild(bolinha);
            ponto.appendChild(info);

            const linhaTempo = document.querySelector('.linha-do-tempo');
            const seta = document.querySelector('.seta-final');
            linhaTempo.insertBefore(ponto, seta);
        });
    }
});
