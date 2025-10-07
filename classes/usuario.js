export class Usuario {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
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
    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereco}`);
    }
}
