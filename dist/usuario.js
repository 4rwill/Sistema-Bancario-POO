export class Usuario {
    constructor(nome, endereco) {
        this.contas = [];
        this.nome = nome;
        this.endereco = endereco;
    }
    adicionarConta(conta) {
        this.contas.push(conta);
        console.log(`Conta Nº ${conta.getNumero()} adicionada ao usuário ${this.nome}`);
    }
    exibirContas() {
        console.log("----- Contas -----");
        if (this.contas.length === 0) {
            console.log("Nenhuma conta encontrada.");
            return;
        }
        this.contas.forEach(conta => {
            console.log(`Conta Nº: ${conta.getNumero()}`);
            conta.consultarSaldo();
        });
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(novoEndereco) {
        this.endereco = novoEndereco;
    }
    getContas() {
        return this.contas;
    }
}
