import Cliente from './Modelo/Cliente.js';
import Produto from './Modelo/Produto.js';
//#region  Cliente
// let objCliente = new Cliente('45036657829',
//                           'Vitor Haga',
//                           'Rua Itagua',
//                           'Bairro Jardim Bongiovani',
//                           'Presidente Prudente',
//                           'SP',
//                           '18-93618-9635',
//                           'vitorhagamu@hotmail.com');

// objCliente.nome = 'Vitor Hugo Tsuyoshi Guimarães Haga';

// objCliente.removerDoBancoDados(()=>{
//     console.log("Cliente Exckuído com sucesso!!!");
// })

// objCliente.atualizar().then(()=>{
//     console.log("Cliente Atualizado com sucesso!!!");
// })

// objCliente.gravar().then(()=>{
//     console.log("Cliente Gravado com sucesso!!!");
// })

// objCliente = new Cliente();

// objCliente.consultar('Vitor Hugo Tsuyoshi Guimarães Haga').then((clientes)=>{
//     clientes.forEach((cliente)=>{
//         console.log(cliente.toJson());
//     })
// })

// objCliente.consultarCPF('45036657829').then((clientes)=>{
//     clientes.forEach((cliente)=>{
//         console.log(cliente.toJson());
//     })
// })
//#endregion

//#region Trabalho
let objetoProduto = new Produto(null,'Sopa', '20');

objetoProduto.gravar().then(()=>{
    console.log("Produto "+objetoProduto.descricao+" foi gravado com sucesso!!!");
    let objetoProduto2 = new Produto(null,'Sopa para Bebe', '20');
        objetoProduto.consultar('Sopa').then((produto)=>{
        objetoProduto2.codigo = produto.codigo
        objetoProduto2.atualizar().then(()=>{
            console.log("Produto "+objetoProduto.descricao+" foi alterado para "+objetoProduto2.descricao+" com sucesso!!!");
                objetoProduto.consultarTodosProdutos().then((produtos)=>{
                    produtos.forEach(produto => {
                        console.log(produto.toJson());
                    });
                    objetoProduto2.removerDoBancoDados().then(()=>{
                        console.log("Produto "+objetoProduto2.descricao+" foi excluído com sucesso!!!");
                    });
                });
            
        });
    });
});
//#endregion