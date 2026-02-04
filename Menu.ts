import { colors } from './src/util/Colors'
import { Conta } from './src/model/Conta';
import { Input } from './src/util/Input';


export function main(){
    let opcao:number

    //instanciar objetos da classe conta
    const c1 = new Conta(1, 1234, "Clarisse Rodrigues", 1, 1000);
    const c2 = new Conta(2, 1234, "Benedito Perez", 2, 25000)

    console.log("Sacar R$100: ", c1.sacar(100));
    console.log("Sacar R$1500: ", c2.sacar(1500));
    // console.log("Depositar 500: ", c1.depositar(500));  

    c1.visualizar();
    c2.visualizar();

    

    while(true){
        console.log( colors.fg.yellow, 
                     "***************************************")
        console.log("                                         ")
        console.log("        BANCO GENERATION BRASIL          ")
        console.log("                                         ")
        console.log(" ****************************************")
        console.log("                                         ")
        console.log("[1] CRIAR CONTA                          ")
        console.log("[2] LISTAR TODAS AS CONTAS               ")
        console.log("[3] BUSCAR CONTA POR NUMERO              ")
        console.log("[4] ATUALIZAR DADOS DA CONTA             ")
        console.log("[5] APAGAR UMA CONTA                     ")
        console.log("[6] SACAR                                ")
        console.log("[7] DEPOSITAR                            ")
        console.log("[8] TRANSFERIR                           ")
        console.log("[0] SAIR                                 ")
        console.log("                                         ")
        console.log("*****************************************")
        console.log("                                         ",
            colors.reset)

        console.log("Entre com a opção desejada: ")
        opcao = Input.questionInt("")

        if(opcao === 0){
            console.log("\nSaindo do sistema...")
            console.log(colors.fg.magentastrong,
                "\nBanco Generation Brasil - Seu futuro começa aqui!")
            sobre()
            console.log(colors.reset, "")
            process.exit(0)
        }

        switch(opcao){
            case 1:
                console.log("Criar conta")
                keyPress()
                break
            case 2:
                console.log("Listar todas as contas")
                keyPress()
                break
            case 3:
                console.log("Consultar conta - por numero")
                keyPress()
                break
            case 4:
                console.log("Atualizar dados da conta")
                keyPress()
                break
            case 5:
                console.log("Apagar uma conta")
                keyPress()
                break
            case 6:
                console.log("Saque")
                keyPress()
                break
            case 7:
                console.log("Deposito")
                keyPress()
                break
            case 8:
                console.log("Transferencia entre contas")
                keyPress()
                break
            default:
                console.log("Opção inválida")
        }
    }
}
export function sobre():void{
    console.log("----------------------------------------------------")
    console.log("Projeto desenvolvido por: ")
    console.log("Clarisse Rodrigues")
    console.log("clarissebleasby@gmail.com")
    console.log("https://github.com/clarodriguess")
    console.log("-----------------------------------------------------")
}

//Funcao para fazer uma pausa entra as opcoes do menu
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}
main()

