import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    private taxaJuros : number;
    constructor(numero:number,titular:string,taxaJuros:number,saldo:number = 0 ){
        super(numero,titular,saldo);
        this.taxaJuros = taxaJuros;
    }

    public aplicarJuros():void{
        const juros = this.saldo * this.taxaJuros;
        this.saldo += juros;
        console.log(`Juros de ${juros.toFixed(2)} aplicados. Novo saldo: ${this.saldo.toFixed(2)}`)

    }

    public getTaxaJuros():number{
        return this.taxaJuros;
    }

    public setTaxaJuros(novaTaxaJuros:number):void{
        this.taxaJuros = novaTaxaJuros;
    }    
}