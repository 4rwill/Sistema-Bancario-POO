export class ContaBase {
    constructor(numero, titular, saldo = 0) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        }
        else {
            console.log("Valor de depósito INVÁLIDO!");
        }
    }
    sacar(valor) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        }
        else if (valor > this.saldo) {
            console.log("Valor de saque INSUFICIENTE!");
        }
        else {
            console.log("Valor de saque INVÁLIDO!");
        }
    }
    getNumero() {
        return this.numero;
    }
    setNumero(novoNumero) {
        this.numero = novoNumero;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(novoTitular) {
        this.titular = novoTitular;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(novoSaldo) {
        this.saldo = novoSaldo;
    }
}
