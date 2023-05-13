export default class Cliente{//# define atributo como privado
    #nome;
    #cpf;
    #endereco;
    #bairro;
    #cidade;
    #uf;
    #telefone;
    #email;
    
    //método construtor que define as informações necessárias para se criar um cliente
    constructor(cpf, nome, endereco, bairro, cidade, uf, telefone, email){
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#telefone = telefone;
        this.#email = email;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        if(novoNome != ""){ //regra de "negócio" que impede que clientes existam com nomes vazios 
            this.#nome = novoNome;
        }
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set Bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novoCidade){
        this.#cidade = novoCidade;
    }

    get uf(){
        return this.#uf;
    }

    set uf(novoUf){
        this.#uf = novoUf;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    //override ou sobescrita do método JSON
    toJson(){
        return{
            "cpf"       :this.#cpf,
            "nome"      :this.#nome,
            "endereco"  :this.#endereco,
            "bairro"    :this.#bairro,
            "cidade"    :this.#cidade,
            "uf"        :this.#uf,
            "telefone"  :this.#telefone,
            "email"     :this.#email,
        }
    }
}