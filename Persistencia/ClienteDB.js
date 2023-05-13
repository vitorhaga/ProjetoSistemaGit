import Cliente from '../Modelo/Cliente.js';
import conectar from './Conexao';

export default class ClienteDB{
    async incluir(cliente){
        if(cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = "INSERT INTO cliente(cpf, nome ,endereco ,bairro ,cidade\
                                             uf ,telefone ,email) \
                                             Values(?,?,?,?,?,?,?,?)";
            const valores = [cliente.cpf, cliente.nome, cliente.endereco,
                             cliente.bairro, cliente.cidade, cliente.uf,
                             cliente.telefone, cliente.email];
            await conexao.query(sql,valores);
        }
    }

    async alterar(cliente){
        if(cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = "UPDATE cliente SET nome = ? ,endereco = ? ,bairro = ?, \
                                            cidade = ?, uf = ? ,telefone = ? ,email = ?\
                                        WHERE cpf = ?";
            const valores = [cliente.nome, cliente.endereco,
                             cliente.bairro, cliente.cidade, cliente.uf,
                             cliente.telefone, cliente.email, cliente.cpf];
            await conexao.query(sql,valores);
        }
    }

    async excluir(cliente){
        if(cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = "DELETE cliente WHERE cpf = ?";
            const valores = [cliente.cpf];
            await conexao.query(sql,valores);
        }
    }

    async consultar(termo){
        const conexao = await conectar();
        const sql = "SELECT * FROM cliente WHERE nome ILIKE ?";
        const valores = ['%' + termo + '%'];
        const [rows] = await conexao.query(sql, valores);
        const listClientes = [];
        for(const row of rows){
            const cliente = new Cliente(row['cpf'], row['nome'], row['endereco'],
            row['bairro'], row['cidade'], row['uf'], row['telefone'], row['email']);
            listClientes.push(cliente);
        }

        return listClientes;
    }

    async consultarCPF(cpf){
        const conexao = await conectar();
        const sql = "SELECT * FROM cliente WHERE cpf ILIKE ?";
        const valores = [cpf];
        const [rows] = await conexao.query(sql, valores);
        const listClientes = [];
        for(const row of rows){
            const cliente = new Cliente(row['cpf'], row['nome'], row['endereco'],
            row['bairro'], row['cidade'], row['uf'], row['telefone'], row['email']);
            listClientes.push(cliente);
        }

        return listClientes;
    }
}