import { Conta } from "./Conta.js";
export class ContaPoupanca extends Conta {
    constructor(numero, titular, taxaJuros, saldo = 0) {
        super(numero, titular, saldo);
        this.taxaJuros = taxaJuros;
    }
    aplicarJuros() {
        const juros = this.saldo * this.taxaJuros;
        this.saldo += juros;
        console.log(`Juros de ${juros.toFixed(2)} aplicados. Novo saldo: ${this.saldo.toFixed(2)}`);
    }
    getTaxaJuros() {
        return this.taxaJuros;
    }
    setTaxaJuros(novaTaxaJuros) {
        this.taxaJuros = novaTaxaJuros;
    }
}
