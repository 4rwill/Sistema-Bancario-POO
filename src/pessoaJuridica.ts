import { Usuario } from "./usuario.js";

export class PessoaJuridica extends Usuario{
    private razaoSocial:string;
    private cnpj:string;

    constructor(nomeFantasia:string,endereco:string,razaoSocial:string,cnpj:string){
        super(nomeFantasia,endereco);
        this.razaoSocial = razaoSocial
        this.cnpj = cnpj
    }

    public exibirDados(): void {
        console.log("-----Dados Pessoa Jurídica-----")
        super.exibirDados()
        console.log(`Razão Social: ${this.razaoSocial}`)
        console.log(`CNPJ: ${this.cnpj}`)
        this.exibirContas()
        
    }


}