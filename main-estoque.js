document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('button');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const acao = botao.textContent.trim();
            switch (acao) {
                case 'Adicionar Peça':
                    alert('Função de adicionar peça ainda não implementada.');
                    break;
                case 'Remover Peça':
                    alert('Função de remover peça ainda não implementada.');
                    break;
                case 'Atualizar Estoque':
                    alert('Atualização do estoque ainda não implementada.');
                    break;
                case 'com menos no estoque':
                    filtrarBaixoEstoque();
                    break;
                default:
                    break;
            }
        });
    });
});

function filtrarBaixoEstoque() {
    const linhas = document.querySelectorAll('.tabela-estoque tbody tr');
    linhas.forEach(linha => {
        const estoqueAtual = parseInt(linha.children[3].textContent);
        const estoqueMinimo = parseInt(linha.children[2].textContent);
        if (estoqueAtual <= estoqueMinimo) {
            linha.style.backgroundColor = '#ffcccc';
        } else {
            linha.style.backgroundColor = '';
        }
    });
}