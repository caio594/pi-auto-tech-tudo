import api from './api.js';

const ui = {
    async renderizarClientes() {
        const listaClientes = document.getElementById('container_cadastro_clientes_ul');
        listaClientes.innerHTML = '';

        try {
            const clientes = await api.buscarClientes();
            clientes.forEach(ui.adicionarClientesnaLista);
        } catch (error) {
            alert('Erro ao renderizar os clientes');
            console.error(error);
        }
    },

    adicionarClientesnaLista(cliente) {
        const listaClientes = document.getElementById('container_cadastro_clientes_ul');
        const clienteLi = document.createElement('li');
        clienteLi.setAttribute('data-id', cliente.id);
        clienteLi.classList.add('cartao_clientes');

        const emailCliente = document.createElement('p');
        emailCliente.textContent = cliente.email;
        emailCliente.classList.add('cliente')

        const nomeCliente = document.createElement('p');
        nomeCliente.textContent = cliente.nome;
        nomeCliente.classList.add('cliente')

        const sobrenomeCliente = document.createElement('p');
        sobrenomeCliente.textContent = cliente.sobrenome;
        sobrenomeCliente.classList.add('cliente')

        const celularCliente = document.createElement('p');
        celularCliente.textContent = cliente.celular;
        celularCliente.classList.add('cliente')

        const cidadeCliente = document.createElement('p');
        cidadeCliente.textContent = cliente.cidade;
        cidadeCliente.classList.add('cliente')

        const ruaCliente = document.createElement('p');
        ruaCliente.textContent = cliente.rua;
        ruaCliente.classList.add('cliente')

        const cpfCliente = document.createElement('p');
        cpfCliente.textContent = cliente.cpf;
        cpfCliente.classList.add('cliente')

        clienteLi.appendChild(emailCliente);
        clienteLi.appendChild(nomeCliente);
        clienteLi.appendChild(sobrenomeCliente);
        clienteLi.appendChild(celularCliente);
        clienteLi.appendChild(cidadeCliente);
        clienteLi.appendChild(ruaCliente);
        clienteLi.appendChild(cpfCliente);


    

        

        const botaoEditar = document.createElement('button');
        botaoEditar.classList.add('botoes_formulario_edi');
        botaoEditar.textContent = 'Editar';

        botaoEditar.onclick = () => {
    	    ui.preencherFormularioClientes(cliente);
        };

        const botaoDeletar = document.createElement('button');
        botaoDeletar.classList.add('botoes_formulario_exc');
        botaoDeletar.textContent = 'Deletar';
        botaoDeletar.onclick = async () => {
            const confirmacao = confirm(`Deseja excluir o cliente ${cliente.nome}?`);
            if (confirmacao) {
                try {
                    await api.deletarCliente(cliente.id);
                    ui.renderizarClientes();
                } catch (error) {
                    alert('Erro ao deletar cliente.');
                }
            }
        };




        clienteLi.appendChild(botaoEditar);
        clienteLi.appendChild(botaoDeletar);
        listaClientes.appendChild(clienteLi);
    },
    
preencherFormularioClientes(cliente) {
    document.getElementById('cliente_id').value = cliente.id;
    document.getElementById('cliente_email').value = cliente.email;
    document.getElementById('cliente_nome').value = cliente.nome;
    document.getElementById('cliente_sobrenome').value = cliente.sobrenome;
    document.getElementById('cliente_celular').value = cliente.celular;
    document.getElementById('cliente_cidade').value = cliente.cidade;
    document.getElementById('cliente_rua').value = cliente.rua;
    document.getElementById('cliente_cpf').value = cliente.cpf;
}



};

export default ui;
