import { Conta } from "./Conta.js";
import { PessoaFisica } from "./pessoaFisica.js";
import { PessoaJuridica } from "./pessoaJuridica.js";
import type { Usuario } from "./usuario.js";

export class Banco {
    private usuarios: Usuario[] = [];

   
    public adicionarCliente(usuario: Usuario): void {
        this.usuarios.push(usuario);
        console.log(`Cliente ${usuario.getNome()} adicionado com sucesso!`);
    }


     
    public encontrarCliente(identificador: string): Usuario | undefined {
        return this.usuarios.find(usuario => {
            if (usuario instanceof PessoaFisica) {
                return usuario.getCpf() === identificador;
            }
            if (usuario instanceof PessoaJuridica) {
                return usuario.getCnpj() === identificador;
            }
            return false;
        });
    }

 
    public criarConta(identificadorCliente: string, numeroConta: number): void {
        const cliente = this.encontrarCliente(identificadorCliente);

        if (cliente) {
            const novaConta = new Conta(numeroConta, cliente.getNome());
            cliente.adicionarConta(novaConta);
        } else {
            console.log(`\nERRO: Cliente com identificador ${identificadorCliente} não encontrado.`);
        }
    }

   
    public exibirClientes(): void {
        console.log("\n----- Clientes do Banco -----");
        if (this.usuarios.length === 0) {
            console.log("Nenhum cliente cadastrado.");
            return;
        }

        this.usuarios.forEach(usuario => {
            usuario.exibirDados();
            console.log("--------------------");
        });
    }
}