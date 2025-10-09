import { Usuario } from "./usuario.js";
export class PessoaFisica extends Usuario {
    constructor(nome, endereco, cpf, dataDeNascimento) {
        super(nome, endereco);
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }
    exibirDados() {
        console.log("-----Dados Pessoa Física-----");
        super.exibirDados();
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de nascimento: ${this.dataDeNascimento}`);
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
        this.cpf = novaDataDeNascimento;
    }
}
