import { Usuario } from "./usuario.js";
export class PessoaJuridica extends Usuario {
    constructor(nomeFantasia, endereco, razaoSocial, cnpj) {
        super(nomeFantasia, endereco);
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
    }
    exibirDados() {
        console.log("\n-----Dados Pessoa Júridica-----\n", `Nome Fantasia: ${this.nomeFantasia}\n`, `Razão Social: ${this.razaoSocial}\n`, `CNPJ: ${this.cnpj}\n`, `Endereço: ${this.getEndereco()}\n`);
        this.exibirContas();
    }
    getNomeFantasia() {
        return this.nomeFantasia;
    }
    setNomeFantasia(novoNomeFantasia) {
        this.nomeFantasia = novoNomeFantasia;
    }
    getRazaoSocial() {
        return this.razaoSocial;
    }
    setRazaoSocial(novaRazao) {
        this.razaoSocial = novaRazao;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(novoCnpj) {
        this.cnpj = novoCnpj;
    }
}
