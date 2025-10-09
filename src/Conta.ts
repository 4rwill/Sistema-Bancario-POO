import { ContaBase } from "./ContaBase.js"

export class Conta extends ContaBase{
    constructor(numero:number, titular:string, saldo: number = 0){
        super(numero,titular,saldo);
    }

}