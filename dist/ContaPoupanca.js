import { Conta } from "./Conta.js";
export class ContaPoupanca extends Conta {
    constructor(numero, titular, taxaJuros, saldo = 0) {
        super(numero, titular, saldo);
        this.taxaJuros = taxaJuros;
    }
    aplicarJuros() {
        const juros = this.getSaldo() * this.taxaJuros;
        const novoSaldo = this.getSaldo() + juros;
        this.setSaldo(novoSaldo);
        console.log(`Juros de ${juros.toFixed(2)} aplicados. Novo saldo: ${this.getSaldo().toFixed(2)}`);
    }
    getTaxaJuros() {
        return this.taxaJuros;
    }
    setTaxaJuros(novaTaxaJuros) {
        this.taxaJuros = novaTaxaJuros;
    }
}
