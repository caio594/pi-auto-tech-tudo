const URL_BASE = 'http://localhost:3000';

const api = {
    async buscarClientes() {
        try {
            const response = await fetch(`${URL_BASE}/clientes`);
            return await response.json();
        } catch (error) {
            alert("Erro na requisição dos clientes");
            throw error;
        }
    },

    async cadastrarNovocliente(cliente) {
        try {
            const response = await fetch(`${URL_BASE}/clientes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cliente)
            });
            return await response.json();
        } catch (error) {
            alert('Erro no cadastro de clientes');
            throw error;
        }
    },

    async buscarClientesByID(id) {
        try {
            const response = await fetch(`${URL_BASE}/clientes/${id}`);
            return await response.json();
        } catch (error) {
            alert('Erro ao buscar cliente');
            throw error;
        }
    },

    async editarcliente(cliente) {
        try {
            const response = await fetch(`${URL_BASE}/clientes/${cliente.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cliente)
            });
            return await response.json();
        } catch (error) {
            alert('Erro ao editar cliente');
            throw error;
        }
    },

    async deletarCliente(id) {
        try {
            const response = await fetch(`${URL_BASE}/clientes/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error('Erro na requisição DELETE');
            }

            return true;
        } catch (error) {
            alert('Erro ao excluir cliente');
            throw error;
        }
    }

};

export default api;
