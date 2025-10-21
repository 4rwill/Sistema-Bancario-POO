import { Banco } from "./Banco.js";
import { PessoaFisica } from "./pessoaFisica.js";
import { PessoaJuridica } from "./pessoaJuridica.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

const meuBanco = new Banco('db.json');




let rodando = true;

while (rodando) {
    console.clear();
    console.log("===================================");
    console.log("🏦 BEM-VINDO AO BANCO DIGITAL 🏦");
    console.log("===================================");
    console.log("1. Cadastrar Novo Cliente");
    console.log("2. Criar Conta para Cliente");
    console.log("3. Realizar Depósito");
    console.log("4. Realizar Saque");
    console.log("5. Listar todos os Clientes");
    console.log("6. Sair");
    console.log("===================================");

    const opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            console.log("\n--- Cadastro de Novo Cliente ---");
            const tipoCliente = prompt("Digite 'PF' para Pessoa Física ou 'PJ' para Pessoa Jurídica: ").toUpperCase();
            if (tipoCliente === 'PF') {
                const nome = prompt('Nome: ');
                const endereco = prompt('Endereço: ');
                const cpf = prompt('CPF: ');
                const dataNasc = prompt('Data de Nascimento: ');
                const novoCliente = new PessoaFisica(nome, endereco, cpf, dataNasc);
                meuBanco.adicionarCliente(novoCliente); 
            } else if (tipoCliente === 'PJ') {
                const nomeFantasia = prompt('Nome Fantasia: ');
                const razaoSocial = prompt('Razão Social: ');
                const endereco = prompt('Endereço: ');
                const cnpj = prompt('CNPJ: ');
                const novoCliente = new PessoaJuridica(nomeFantasia, endereco, razaoSocial, cnpj);
                meuBanco.adicionarCliente(novoCliente); 
            } else {
                console.log("Opção inválida.");
            }
            break;
        case '2':
            console.log("\n--- Criação de Conta ---");
            const idCliente = prompt('Digite o CPF ou CNPJ do cliente: ');
            const numContaStr = prompt('Digite o número da nova conta: ');
            const numConta = parseInt(numContaStr);
            meuBanco.criarConta(idCliente, numConta); 
            break;

        case '3':
            console.log("\n--- Realizar Depósito ---");
            const idDeposito = prompt('Digite o CPF/CNPJ do titular: ');
            const clienteDep = meuBanco.encontrarCliente(idDeposito);

            if (clienteDep) {
                const contaDep = clienteDep.getContas()[0];
                if (contaDep) {
                    const valorStr = prompt(`Valor do depósito para a conta ${contaDep.getNumero()}: R$`);
                    contaDep.depositar(parseFloat(valorStr));
                } else {
                    console.log("❌ Este cliente não possui contas cadastradas.");
                }
            } else {
                console.log("❌ Cliente não encontrado.");
            }
            break;

        case '4':
            console.log("\n--- Realizar Saque ---");
            const idSaque = prompt('Digite o CPF/CNPJ do titular: ');
            const clienteSaque = meuBanco.encontrarCliente(idSaque);

            if (clienteSaque) {
                const contaSaque = clienteSaque.getContas()[0];

                if (contaSaque) {
                    const valorStr = prompt(`Valor do saque para a conta ${contaSaque.getNumero()}: R$`);
                    contaSaque.sacar(parseFloat(valorStr));
                } else {
                    console.log("❌ Este cliente não possui contas cadastradas.");
                }
            } else {
                console.log("❌ Cliente não encontrado.");
            }
            break;

        case '5':
            console.clear();
            meuBanco.exibirClientes();
            break;

        case '6':
            meuBanco.salvarDados(); 
            rodando = false;
            console.log("\nObrigado por usar nosso sistema. Até logo! 👋");
            break;

        default:
            console.log('\n❌ Opção inválida! Tente novamente.');
            break;
    }

    if (rodando) {
        prompt('\nPressione ENTER para continuar...');
    }
}