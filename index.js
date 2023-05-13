import Cliente from './Modelo/Cliente.js';

let objCliente = new Cliente('45036657829',
                          'Vitor Haga',
                          'Rua Itagua',
                          'Bairro Jardim Bongiovani',
                          'Presidente Prudente',
                          'SP',
                          '18-93618-9635',
                          'vitorhagamu@hotmail.com');

objCliente.nome = 'Vitor Hugo Tsuyoshi Guimarães Haga';

// objCliente.removerDoBancoDados(()=>{
//     console.log("Cliente Exckuído com sucesso!!!");
// })

// objCliente.atualizar().then(()=>{
//     console.log("Cliente Atualizado com sucesso!!!");
// })

// objCliente.gravar().then(()=>{
//     console.log("Cliente Gravado com sucesso!!!");
// })

objCliente = new Cliente();

// objCliente.consultar('Vitor Hugo Tsuyoshi Guimarães Haga').then((clientes)=>{
//     clientes.forEach((cliente)=>{
//         console.log(cliente.toJson());
//     })
// })

objCliente.consultarCPF('45036657829').then((clientes)=>{
    clientes.forEach((cliente)=>{
        console.log(cliente.toJson());
    })
})