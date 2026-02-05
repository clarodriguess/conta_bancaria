import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{
    private _aniversario: number;

    //Construtor com a chamamada p/ a Super Classe
    // (precisa ter os atributos herdados + _aniversario)
    constructor(
        numero:number, 
        agencia:number, 
        titular:string, 
        tipo:number, 
        saldo:number, 
        aniversario: number) {
        super(numero, agencia, titular, tipo, saldo);
		this._aniversario = aniversario;
	}

	public get aniversario(): number {
		return this._aniversario;
	}

	public set aniversario(value: number) {
		this._aniversario = value;
	}

    //polimorfismo (sobreescever um metodo herdado)
    //chamei o metodo visualizar e disse pra acrescentar o aniversario da conta
    public visualizar(): void {
        super.visualizar();
        console.log(`Melhor dia para sacar: ${this._aniversario}`);  
    }
    
}