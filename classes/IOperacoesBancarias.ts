interface IOperacoesBancaria{
    depositar(valor:number):void;
    sacar(valor:number):void;
    consultarSaldo():number;
}