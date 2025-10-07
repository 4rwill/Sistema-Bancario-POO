export abstract class Usuario{

    private nome: string;
    private endereco: string;
    
    constructor(nome:string,endereco:string){
        this.nome = nome;
        this.endereco = endereco    ;
    }

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
    
    public exibirDados():void{
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereco}`);
    }

}

