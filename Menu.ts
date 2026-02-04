import leia from 'readline-sync'
import { colors } from './src/util/Colors'


export function main(){
    let opcao:number

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
        console.log("[9] SAIR                                 ")
        console.log("                                         ")
        console.log("*****************************************")
        console.log("                                         ",
            colors.reset)

        console.log("Entre com a opção desejada: ")
        opcao = leia.questionInt()

        if(opcao == 9){
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
                
                break
            case 2:
                console.log("Listar todas as contas")
                
                break
            case 3:
                console.log("Consultar conta - por numero")
                
                break
            case 4:
                console.log("Atualizar dados da conta")
                
                break
            case 5:
                console.log("Apagar uma conta")
               
                break
            case 6:
                console.log("Saque")
                break
            case 7:
                console.log("Deposito")
                
                break
            case 8:
                console.log("Transferencia entre contas")
               
                break
            default:
                console.log("Opção inválida")
        }
    }
}
export function sobre():void{
    console.log("\n----------------------------------------------------")
    console.log("Projeto desenvolvido por: ")
    console.log("Clarisse Rodrigues")
    console.log("clarissebleasby@gmail.com")
    console.log("https://github.com/clarodriguess")
    console.log("-----------------------------------------------------")
}
main()

