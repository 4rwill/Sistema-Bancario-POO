abstract class ContaBase {
    protected numero:number;
    protected titular: string;
    protected conta: number;

    constructor(numero:number,titular:string,conta:number) {
        this.numero = numero;
        this.titular = titular;
        this.conta = conta;
        
    }

    //Implementar métodos
}