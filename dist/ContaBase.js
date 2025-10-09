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
    consultarSaldo() {
        console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
        return this.saldo;
    }
    ;
    getNumero() {
        return this.numero;
    }
    getTitular() {
        return this.titular;
    }
    getSaldo() {
        return this.saldo;
    }
}
