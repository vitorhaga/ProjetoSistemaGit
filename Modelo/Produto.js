export default class Produto{//# define atributo como privado
    #codigo;
    #descricao;
    #quantidadeEstoque;

    //método construtor que define as informações necessárias para se criar um cliente
    constructor(codigo, descricao, quantidadeEstoque){
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

    //override ou sobescrita do método JSON
    toJson(){
        return{
            "codigo"             :this.#codigo,
            "descricao"          :this.#descricao,
            "quantidadeEstoque"  :this.#quantidadeEstoque,
        }
    }
}