import { Usuario } from "./usuario.js";
export class PessoaFisica extends Usuario {
    constructor(nome, endereco, cpf, dataDeNascimento) {
        super(nome, endereco);
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }
    exibirDados() {
        console.log("\n-----Dados Pessoa Física-----\n", `Nome: ${this.getNome()}\n`, `CPF: ${this.cpf}\n`, `Data de nascimento: ${this.dataDeNascimento}\n`, `Endereço: ${this.getEndereco()}\n`);
        this.exibirContas();
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(novoCpf) {
        this.cpf = novoCpf;
    }
    getDataDeNascimento() {
        return this.dataDeNascimento;
    }
    setDataDeNascimento(novaDataDeNascimento) {
        this.dataDeNascimento = novaDataDeNascimento;
    }
}
