import { Usuario } from "./usuario.js";
class PessoaFisica extends Usuario {
    constructor(nome, endereco, cpf, dataDeNascimento) {
        super(nome, endereco);
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }
    exibirDados() {
        super.exibirDados();
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de nascimento: ${this.dataDeNascimento}`);
    }
}
