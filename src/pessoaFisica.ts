import { Usuario } from "./usuario.js";

export class PessoaFisica extends Usuario{
    private cpf: string;
    private dataDeNascimento: string;

    constructor(nome:string,endereco:string,cpf:string,dataDeNascimento:string){     
        super(nome,endereco);
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;

    }   

    public exibirDados(): void {
        console.log("-----Dados Pessoa Física-----")
        super.exibirDados();
        console.log(`CPF: ${this.cpf}`)
        console.log(`Data de nascimento: ${this.dataDeNascimento}`)
        this.exibirContas()
    }

    public getCpf():string{
        return this.cpf;
    }

    public setCpf(novoCpf:string):void{
        this.cpf = novoCpf;
    }

     public getDataDeNascimento():string{
        return this.dataDeNascimento;
    }

    public setDataDeNascimento(novaDataDeNascimento:string):void{
        this.cpf = novaDataDeNascimento;
    }
}

 