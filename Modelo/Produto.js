import ProdutoDB from "../Persistencia/ProdutoDB.js";

export default class Produto{//# define atributo como privado
    #codigo;
    #descricao;
    #quantidadeEstoque;

    //método construtor que define as informações necessárias para se criar um produto
    constructor(codigo, descricao, quantidadeEstoque){
        if(codigo != null)
            this.#codigo = codigo;

        this.#descricao = descricao;
        this.#quantidadeEstoque = quantidadeEstoque;
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(novaDescricao){
        if(novaDescricao != ""){ //regra de "negócio" que impede que clientes existam com nomes vazios 
            this.#descricao = novaDescricao;
        }
    }

    get quantidadeEstoque(){
        return this.#quantidadeEstoque;
    }

    set quantidadeEstoque(novoQuantidadeEstoque){
        this.#quantidadeEstoque = novoQuantidadeEstoque;
    }

    async gravar(){
        const produtoDB = new ProdutoDB();
        await produtoDB.incluir(this);
    }

    async atualizar(){
        const produtoDB = new ProdutoDB();
        await produtoDB.alterar(this);
    }

    async removerDoBancoDados(){
        const produtoDB = new ProdutoDB();
        await produtoDB.excluir(this);
    }

    async consultar(termo){
        const produtoDB = new ProdutoDB();
        const produtos  = await produtoDB.consultar(termo);
        return produtos;
    }

    async consultarTodosProdutos(){
        const produtoDB = new ProdutoDB();
        const produtos  = await produtoDB.consultarTodosProdutos();
        return produtos;
    }

    async consultarCodigo(codigo){
        const produtoDB = new ProdutoDB();
        const produto  = await produtoDB.consultarCodigo(codigo);
        return produto;
    }

    //override ou sobescrita do método JSON
    toJson(){
        return{
            "codigo"             :this.#codigo,
            "descricao"          :this.#descricao,
            "quantidadeEstoque"  :this.#quantidadeEstoque,
        }
    }
}