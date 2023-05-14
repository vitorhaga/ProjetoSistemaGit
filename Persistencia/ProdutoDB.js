import Produto from '../Modelo/Produto.js';
import conectar from './Conexao.js';

export default class ProdutoDB{
    async incluir(produto){
        if(produto instanceof Produto){
            const conexao = await conectar();
            const sql = "INSERT INTO produto (descricao, quantidade_estoque) \
                                             Values(?,?)";
            const valores = [produto.descricao, produto.quantidadeEstoque];
            await conexao.query(sql,valores);
        }
    }

    async alterar(produto){
        if(produto instanceof Produto){
            const conexao = await conectar();
            const sql = "UPDATE produto SET descricao = ? ,quantidade_estoque = ? WHERE codigo = ?";
            const valores = [produto.descricao, produto.quantidadeEstoque, produto.codigo];
            await conexao.query(sql,valores);
        }
    }

    async excluir(produto){
        if(produto instanceof Produto){
            const conexao = await conectar();
            const sql = "DELETE FROM produto WHERE codigo = ?";
            const valores = [produto.codigo];
            await conexao.query(sql,valores);
        }
    }

    async consultar(termo){
        const conexao = await conectar();
        const sql = "SELECT * FROM produto WHERE descricao LIKE ? limit 1";
        const valores = [termo];
        const [rows] = await conexao.query(sql, valores);
        let listProdutos;
        for(const row of rows){
            const produto = new Produto(row['codigo'], row['descricao'], row['quantidade_estoque']);
            listProdutos = produto;
        }

        return listProdutos;
    }

    async consultarTodosProdutos(){
        const conexao = await conectar();
        const sql = "SELECT codigo, descricao, quantidade_estoque FROM produto";
        const [rows] = await conexao.query(sql);
        const listProdutos = [];
        for(const row of rows){
            const produto = new Produto(row['codigo'], row['descricao'], row['quantidade_estoque']);
            listProdutos.push(produto);
        }

        return listProdutos;
    }

    async consultarCodigo(codigo){
        const conexao = await conectar();
        const sql = "SELECT * FROM produto WHERE codigo = ? LIMIT 1";
        const valores = [codigo];
        const [rows] = await conexao.query(sql, valores);
        const listProdutos = [];
        for(const row of rows){
            const produto = new Produto(row['codigo'], row['descricao'], row['quantidade_estoque']);
            listProdutos.push(cliente);
        }

        return listProdutos;
    }
}