import Cliente from './Modelo/Cliente.js';

let objCliente = new Cliente('4036657829',
                          'Vitor Haga',
                          'Rua Itagua',
                          'Bairro Jardim Bongiovani',
                          'Presidente Prudente',
                          'SP',
                          '18-93618-9635',
                          'vitorhagamu@hotmail.com');

objCliente.nome = 'Vitor Hugo Tsuyoshi Guimarães Haga';

console.log(objCliente.toJson());