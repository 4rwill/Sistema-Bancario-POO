import { ContaBase } from "./ContaBase.js";
export class Conta extends ContaBase {
    constructor(numero, titular, saldo = 0) {
        super(numero, titular, saldo);
    }
}
