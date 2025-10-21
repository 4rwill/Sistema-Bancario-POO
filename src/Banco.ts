import * as fs from 'fs';
import * as path from 'path';
import { Conta } from "./Conta.js";
import { ContaPoupanca } from './ContaPoupanca.js'; 
import { ContaBase } from './ContaBase.js';
import { PessoaFisica } from "./pessoaFisica.js";
import { PessoaJuridica } from "./pessoaJuridica.js";
import type { Usuario } from "./usuario.js";

interface DadosContaJSON {
  tipoConta: 'Corrente' | 'Poupanca';
  numero: number;
  titular: string;
  saldo: number;
  taxaJuros?: number; // pra poupança
}

interface DadosUsuarioJSON {
  tipo: 'PF' | 'PJ';
  endereco: string;
  contas: DadosContaJSON[];
  // pessoaFisica
  nome?: string;
  cpf?: string;
  dataDeNascimento?: string;
  // pessoaJuridica
  nomeFantasia?: string; 
  razaoSocial?: string;
  cnpj?: string;
}



export class Banco {
    private usuarios: Usuario[] = [];
    private dbPath: string; 

    constructor(dbPath: string = 'db.json') {
        this.dbPath = path.resolve(process.cwd(), dbPath);
        this.carregarDados();
    }

    private carregarDados(): void {
        try {
            if (!fs.existsSync(this.dbPath)) {
                console.log("Arquivo 'db.json' não encontrado. Iniciando com banco de dados vazio.");
                return;
            }

            const dadosArquivo = fs.readFileSync(this.dbPath, 'utf-8');
            if (dadosArquivo.trim() === "") {
                console.log("'db.json' está vazio. Iniciando sem clientes.");
                return;
            }

            const dadosDoJson: DadosUsuarioJSON[] = JSON.parse(dadosArquivo);

            this.usuarios = dadosDoJson.map(dado => {
                let usuario: Usuario;

                if (dado.tipo === 'PF') {
                    usuario = new PessoaFisica(dado.nome!, dado.endereco!, dado.cpf!, dado.dataDeNascimento!);
                } else if (dado.tipo === 'PJ') {
                    usuario = new PessoaJuridica(dado.nomeFantasia!, dado.endereco!, dado.razaoSocial!, dado.cnpj!);
                } else {
                    console.error(`Tipo de usuário desconhecido: ${dado.tipo}. Pulando...`);
                    return null; 
                }

                dado.contas.forEach(dadoConta => {
                    let conta: ContaBase;
                    if (dadoConta.tipoConta === 'Poupanca') {
                        conta = new ContaPoupanca(dadoConta.numero, dadoConta.titular, dadoConta.taxaJuros!, dadoConta.saldo);
                    } else {
                        conta = new Conta(dadoConta.numero, dadoConta.titular, dadoConta.saldo);
                    }
                    usuario.adicionarConta(conta);
                });

                return usuario;
            }).filter(u => u !== null) as Usuario[]; 

            console.log(`\n✅ Dados carregados! ${this.usuarios.length} clientes hidratados do 'db.json'.\n`);

        } catch (error) {
            console.error("❌ Erro ao carregar dados do 'db.json':", error);
            this.usuarios = []; 
        }
    }

    public salvarDados(): void {
        try {
            const dadosParaSalvar = this.usuarios.map(usuario => {
                const contasDados: DadosContaJSON[] = usuario.getContas().map(conta => {
                    if (conta instanceof ContaPoupanca) {
                        return {
                            tipoConta: 'Poupanca',
                            numero: conta.getNumero(),
                            titular: conta.getTitular(),
                            saldo: conta.getSaldo(),
                            taxaJuros: conta.getTaxaJuros()
                        };
                    }
                    return {
                        tipoConta: 'Corrente',
                        numero: conta.getNumero(),
                        titular: conta.getTitular(),
                        saldo: conta.getSaldo()
                    };
                });

                if (usuario instanceof PessoaFisica) {
                    return {
                        tipo: 'PF',
                        nome: usuario.getNome(),
                        endereco: usuario.getEndereco(),
                        cpf: usuario.getCpf(),
                        dataDeNascimento: usuario.getDataDeNascimento(),
                        contas: contasDados
                    };
                }

                if (usuario instanceof PessoaJuridica) {
                    return {
                        tipo: 'PJ',
                        nomeFantasia: usuario.getNomeFantasia(), 
                        razaoSocial: usuario.getRazaoSocial(),
                        endereco: usuario.getEndereco(),
                        cnpj: usuario.getCnpj(),
                        contas: contasDados
                    };
                }
                return null;
            }).filter(u => u !== null); 

            
            fs.writeFileSync(this.dbPath, JSON.stringify(dadosParaSalvar, null, 2), 'utf-8');
            console.log("\n💾 Dados salvos com sucesso em 'db.json'!");

        } catch (error) {
            console.error("❌ Erro ao salvar dados:", error);
        }
    }


    public adicionarCliente(usuario: Usuario): void {
        this.usuarios.push(usuario);
        console.log(`Cliente ${usuario.getNome()} adicionado com sucesso!`);
        this.salvarDados();  
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
            this.salvarDados(); 
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