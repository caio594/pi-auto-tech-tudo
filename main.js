import api from './api.js';

async function manipularSubForm(evento) {
    evento.preventDefault();
    const id = document.getElementById('cliente_id').value;
    const email = document.getElementById('cliente_email').value;
    const nome = document.getElementById('cliente_nome').value;
    const sobrenome = document.getElementById('cliente_sobrenome').value;
    const celular = document.getElementById('cliente_celular').value;
    const cidade = document.getElementById('cliente_cidade').value;
    const rua = document.getElementById('cliente_rua').value;
    const cpf = document.getElementById('cliente_cpf').value;

    try {
        if (id) {
            await api.editarcliente({ id, email, nome, sobrenome, celular, cidade, rua, cpf });
        } else {
            await api.cadastrarNovocliente({ email, nome, sobrenome, celular, cidade, rua, cpf });
        }
        alert('Cliente salvo com sucesso!');
        window.location.reload();
    } catch (error) {
        alert('Erro ao salvar cliente.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-clientes');
    if (formulario) {
        formulario.addEventListener('submit', manipularSubForm);
    }
});
