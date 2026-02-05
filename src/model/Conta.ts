import { colors } from "../util/Colors";

export abstract class Conta{
    //classe abstrata n tem objetos, n pode ser instanciada
    //é so para fazer herança

    //atributos da classe
    private _numero: number;
    private _agencia: number;
    private _titular: string;
    private _tipo:number;
    private _saldo:number;

    //metodo construtor

	constructor(numero:number, agencia:number, titular:string, tipo:number, saldo:number){
        this._numero = numero
        this._agencia = agencia
        this._titular = titular
        this._tipo = tipo
        this._saldo = saldo
    }

    //metodos getter e setter
	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get titular(): string {
		return this._titular;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}

//metodos auxiliares

    //Metodo para saque
    //retorno do tipo boolean pra saber se deu certo ou nao
    //necessario verificar se tem saldo
    public sacar(valor:number):boolean{
        if(valor > this._saldo){
            console.log(colors.fg.red,"Saldo insuficiente", colors.reset)
            return false;
        }
        this._saldo -= valor
        console.log(colors.fg.green,"Saque realizado com sucesso", colors.reset)
        return true;    
    }

    public depositar(valor:number):void{
        if(valor <= 0){
            console.log(colors.fg.red,"Valor invalido", colors.reset)
        }

        this._saldo += valor
        console.log(colors.fg.green,"Deposito realizado com sucesso", colors.reset)
    }


    //metodo para visulizar as infos da conta:
    public visualizar():void{

        // switch case para informar o tipo da conta
    let tipo:string;
    switch(this._tipo){
        case 1:
            tipo = "Conta Corrente"
            break
        case 2:
            tipo = "Conta Poupança"
            break
        default:
            tipo = "Tipo de Conta Invalida"
    }

     console.log("\n******************************");
     console.log("        DADOS DA CONTA        ");  
     console.log("******************************");  
     console.log(`Numero da conta: ${this._numero}`);
     console.log(`Numero da agencia: ${this._agencia}`);
     console.log(`Titular da conta: ${this._titular}`);
     console.log(`Tipo da conta: ${tipo}`); //exibir a var tipo em vez do atributo 
     console.log(`Saldo da conta: R$ ${this._saldo.toFixed(2)}`);
    }
        
}
