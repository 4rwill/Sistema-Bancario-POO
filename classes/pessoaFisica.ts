import { Usuario } from "./usuario.js";

class PessoaFisica extends Usuario{
    private cpf: string;
    private dataDeNascimento: string;

    constructor(nome:string,endereco:string,cpf:string,dataDeNascimento:string){
        super(nome,endereco);
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;

    }   

    public exibirDados(): void {
        super.exibirDados();
        console.log(`CPF: ${this.cpf}`)
        console.log(`Data de nascimento: ${this.dataDeNascimento}`)
    }
}

 