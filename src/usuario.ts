import type { ContaBase } from "./ContaBase.js";

export abstract class Usuario{

    private nome: string;
    private endereco: string;
    private contas: ContaBase[] = []
    
    constructor(nome:string,endereco:string){
        this.nome = nome;
        this.endereco = endereco;
    }

    public adicionarConta(conta:ContaBase):void{
        this.contas.push(conta);
        console.log(`Conta Nº ${conta.getNumero()} adicionada ao usuário ${this.nome}`)
    }

    protected exibirContas(): void {
        console.log("----- Contas -----");
        if (this.contas.length === 0) {
            console.log("Nenhuma conta encontrada.");
            return;
        }
        this.contas.forEach(conta => {
            console.log(`Conta Nº: ${conta.getNumero()}`)
            conta.consultarSaldo();
        });
    }    




    public abstract exibirDados():void



    public getNome():string{
        return this.nome;
    }

    public setNome(novoNome:string):void{
        this.nome = novoNome;
    }

    public getEndereco():string{
        return this.endereco;
    }

    public setEndereco(novoEndereco:string){
        this.endereco = novoEndereco;
    }

     public getContas(): ContaBase[] {
        return this.contas;
    }
    

}

