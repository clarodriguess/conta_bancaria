import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    //nao existe meia herança, herda tudo da classe Conta

    // Add atributos especificos de conta conrrente:
    private _limite: number;

    //Construtor com a chamamada p/ a Super Classe
    // (precisa ter o _limite e os atributos herdados)

	constructor(
        numero:number, 
        agencia:number, 
        titular:string, 
        tipo:number, 
        saldo:number, 
        limite: number) {
        super(numero, agencia, titular, tipo, saldo);
		this._limite = limite;
	}

    //metodos GET e SET especificos da Classe ContaCorrente
	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}

    //polimorfismo
    //sobreescever um metodo herdado
    //chamei o metodo visualizar e disse pra acrescentar o limite
    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta: R$ ${this._limite.toFixed(2)}`);  
    }
    
    //metodo sacar sobreescrito
    //para acrescentar a verificacao do limite
    public sacar(valor:number):boolean{
            if(valor > (this.saldo + this.limite)){
                console.log(
                    colors.fg.red,
                    "Saldo insuficiente", 
                    colors.reset
                )
                return false;
            }
            this.saldo -= valor
            console.log(
                colors.fg.green,
                "Saque realizado com sucesso", 
                colors.reset
            )
            return true;    
        }

}