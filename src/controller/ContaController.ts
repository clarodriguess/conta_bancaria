//classe responsavel por implementar tds os metodos de conta repository

import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository{
    
    //atributos da classe
    private listaContas = new Array<Conta>();
    public numero: number = 0;

    //metodos CRUD
    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);
        if (buscaConta !== null) {
            buscaConta.visualizar();
        } else{
            console.log(colors.fg.red, "\n*** Conta não encontrada ***", colors.reset)
        }
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        } //percorre todo o array e lista o q tem, item a item
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, `\n*** Conta ${conta.numero} cadastrada com sucesso ***`, colors.reset);
    }

    atualizar(conta: Conta): void {
         const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta; //[] pega na lista contas, o indice do obj - substitui pelo novo 
            console.log(colors.fg.green, `\n*** Conta ${conta.numero} atualizada com sucesso ***`, colors.reset);
        } else{
            console.log(colors.fg.red, "\n*** Conta não encontrada ***", colors.reset)
        }
    }
    

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, `\n*** Conta ${numero} apagada com sucesso ***`, colors.reset);
        } else{
            console.log(colors.fg.red, "\n*** Conta não encontrada ***", colors.reset)
        }
    }

    //metodos bancarios
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number) {
        throw new Error("Method not implemented.");
    }

    //metodos auxiliares

    //para criar numeracao automatica das contas
    //metodo publico para acessar no menu
    public gerarNumero():number{
        return ++ this.numero;
    }

    //procurar conta por numero (para usar em buscar por numero, deletar)
    public buscarNoArray(numero:number):Conta | null{
        for (let conta of this.listaContas) {
            if(conta.numero === numero){
                return conta;
            }
        }
        return null;
    }
}
    //

    
