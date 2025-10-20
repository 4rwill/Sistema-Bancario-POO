import { ContaBase } from "./ContaBase.js";
export class Conta extends ContaBase {
    constructor(numero, titular, saldo = 0) {
        super(numero, titular, saldo);
    }
    consultarSaldo() {
        const saldoAtual = this.getSaldo();
        console.log(`Saldo da conta Nº ${this.getNumero()}: R$${saldoAtual}`);
        return saldoAtual;
    }
}
