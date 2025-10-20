import { Usuario } from "./usuario.js";

export class PessoaJuridica extends Usuario{
    private nomeFantasia:string;
    private razaoSocial:string;
    private cnpj:string;

    constructor(nomeFantasia:string,endereco:string,razaoSocial:string,cnpj:string){
        super(nomeFantasia,endereco);
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.cnpj = cnpj
    }

    public exibirDados() : void {
         console.log("\n-----Dados Pessoa Júridica-----\n",
                    `Nome Fantasia: ${this.nomeFantasia}\n`,
                    `Razão Social: ${this.razaoSocial}\n`,
                    `CNPJ: ${this.cnpj}\n`,
                    `Endereço: ${this.getEndereco()}\n`
        )
        this.exibirContas()
        
    }
     public getNomeFantasia() : string{
        return this.nomeFantasia;
    }

    public setNomeFantasia(novoNomeFantasia : string) : void{
        this.nomeFantasia = novoNomeFantasia;
    }


    public getRazaoSocial() : string{
        return this.razaoSocial;
    }

    public setRazaoSocial(novaRazao : string) : void{
        this.razaoSocial = novaRazao;
    }

    public getCnpj() : string{
        return this.cnpj;
    }

    public setCnpj(novoCnpj : string) : void{
        this.cnpj = novoCnpj;
    }


}