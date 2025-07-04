async function enviarFormularioMecanico(event) {
    event.preventDefault();

    const email = document.getElementById('mecanico_email').value;
    const nome = document.getElementById('mecanico_nome').value;
    const sobrenome = document.getElementById('mecanico_sobrenome').value;
    const celular = document.getElementById('mecanico_celular').value;
    const cidade = document.getElementById('mecanico_cidade').value;
    const rua = document.getElementById('mecanico_rua').value;
    const cnpj = document.getElementById('mecanico_cnpj').value;

    const novoMecanico = { email, nome, sobrenome, celular, cidade, rua, cnpj };

    try {
        const resposta = await fetch('http://localhost:3000/mecanicos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoMecanico)
        });

        if (!resposta.ok) throw new Error('Erro no cadastro');

        alert('Mecânico cadastrado com sucesso!');
        window.location.reload();
    } catch (erro) {
        alert('Erro ao cadastrar mecânico.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-mecanicos');
    if (form) {
        form.addEventListener('submit', enviarFormularioMecanico);
    }
});