import type { IOperacoesBancarias } from "./IOperacoesBancarias.js";

export abstract class ContaBase implements IOperacoesBancarias {
    protected numero:number;
    protected titular: string;
    protected saldo: number;

    constructor(numero:number,titular:string,saldo:number = 0) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
        
    }

    public depositar(valor: number): void {
        if(valor>0){
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`)
        }

        else{
            console.log("Valor de depósito INVÁLIDO!")
        }
        
    }

    public sacar(valor: number): void {
        if (valor <= this.saldo && valor > 0){
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`)
        }
        else if(valor>this.saldo){
            console.log("Valor de saque INSUFICIENTE!")

        }
        else{
            console.log("Valor de saque INVÁLIDO!")
        }
        
    }

    public consultarSaldo(): number{
        console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`)

        return this.saldo
    };

    public getNumero():number{
        return this.numero;
    }


     public getTitular():string{
        return this.titular;
    }

     public getSaldo():number{
        return this.saldo;
    }

   

    

}