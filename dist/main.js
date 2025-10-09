import { PessoaJuridica } from "./pessoaJuridica.js";
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
console.clear();
const empresa1 = new PessoaJuridica("Tech Inovation", "Rua Pedro Teixeira", "T.E.C.H", "12.719.809/0001-57");
const contaCorrenteEmpresa = new Conta(5000, empresa1.getNome());
const ContaPoupancaEmpresa = new ContaPoupanca(6000, empresa1.getNome(), 0.5);
empresa1.adicionarConta(contaCorrenteEmpresa);
empresa1.adicionarConta(ContaPoupancaEmpresa);
empresa1.exibirDados();
//Inserir sistema de menu com loop de acertos e erros
//Inserir exceções 
