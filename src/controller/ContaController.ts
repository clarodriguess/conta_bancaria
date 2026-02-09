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

    procurarPorTitular(titular: string): void {
        //filtragem dos dados:
        const buscaPorTitular= this.listaContas.filter(conta => 
            conta.titular.toLocaleUpperCase().includes(titular.toLocaleUpperCase()));
        //listagem dos dados filtrados:
        if (buscaPorTitular.length > 0) {
            buscaPorTitular.forEach(conta => conta.visualizar());
        } else{
            console.log(colors.fg.red, "\n*** Nenhuma conta encontrada ***", colors.reset)
        }
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
        //reproveitei parte do buscaConta
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor) === true)
                console.log(colors.fg.green, `\n*** O saque no valor de ${valor} na conta numero ${numero} foi realizado com sucesso ***`, colors.reset);
        } else{
            console.log(colors.fg.red, "\n*** Conta não encontrada ***", colors.reset)
        }
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log(colors.fg.green, `\n*** O deposito no valor de ${valor} na conta numero ${numero} foi realizado com sucesso ***`, colors.reset);
        } else{
            console.log(colors.fg.red, "\n*** Conta não encontrada ***", colors.reset)
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number) {
        const buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        const buscaContaDestino = this.buscarNoArray(numeroDestino);
        
        if (buscaContaOrigem !== null && buscaContaDestino) {
            if (buscaContaOrigem.sacar(valor) === true){
                buscaContaDestino.depositar(valor);
                console.log(colors.fg.green, `\n*** A transferencia no valor de ${valor} da conta numero ${numeroOrigem} para a conta numero ${numeroDestino} foi realizado com sucesso ***`, colors.reset);
            }
                
        } else{
            console.log(colors.fg.red, "\n*** Conta de origem e/ou conta de destino não foram encontradas ***", colors.reset)
        }
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
    

    
