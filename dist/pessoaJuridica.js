import { Usuario } from "./usuario.js";
export class PessoaJuridica extends Usuario {
    constructor(nomeFantasia, endereco, razaoSocial, cnpj) {
        super(nomeFantasia, endereco);
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
    }
    exibirDados() {
        console.log("-----Dados Pessoa Jurídica-----");
        super.exibirDados();
        console.log(`Razão Social: ${this.razaoSocial}`);
        console.log(`CNPJ: ${this.cnpj}`);
        this.exibirContas();
    }
}
