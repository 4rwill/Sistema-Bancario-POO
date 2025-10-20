import { ContaBase } from "./ContaBase.js"

export class Conta extends ContaBase{
    constructor(numero:number, titular:string, saldo: number = 0){
        super(numero,titular,saldo);
    }

    public consultarSaldo(): number {

        const saldoAtual = this.getSaldo();
        console.log(`Saldo da conta Nº ${this.getNumero()}: R$${saldoAtual}`);
        
        return saldoAtual;
        
    }

}