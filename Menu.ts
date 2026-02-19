import { colors } from './src/util/Colors'
import { Conta } from './src/model/Conta';
import { Input } from './src/util/Input';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaController } from './src/controller/ContaController';
import { ContaPoupanca } from './src/model/ContaPoupanca';

//criar objeto global da classe ContaController - para acessar os metodos
const contas = new ContaController();

//criar um array contendo os tipos de conta (vai ser usado no cadastrar e no atualizar)
const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

export function main(){
   
    let opcao:number;
     criarContasTeste()

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
        console.log("[4] BUSCAR CONTA POR NOME DO TITULAR     ")
        console.log("[5] ATUALIZAR DADOS DA CONTA             ")
        console.log("[6] APAGAR UMA CONTA                     ")
        console.log("[7] SACAR                                ")
        console.log("[8] DEPOSITAR                            ")
        console.log("[9] TRANSFERIR                           ")
        console.log("[0] SAIR                                 ")
        console.log("                                         ")
        console.log("*****************************************")
        console.log("                                         ",
            colors.reset)

        console.log("Entre com a opção desejada: ")
        opcao = Input.questionInt("")

        if(opcao === 0){
            console.log("\nSaindo do sistema...")
            console.log("Banco Generation Brasil - Seu futuro começa aqui!")
            sobre()
            process.exit(0)
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.yellow,"\nCRIAR CONTA", colors.reset )
                criarConta()
                keyPress()
                break
            case 2:
                console.log(colors.fg.yellow,"\nLISTAR TODAS AS CONTAS", colors.reset )
                contas.listarTodas()
                keyPress()
                break
            case 3:
                console.log(colors.fg.yellow,"\nCONSULTAR CONTA POR NUMERO", colors.reset )
                buscarContaPorNumero()
                keyPress()
                break
             case 4:
                console.log(colors.fg.yellow,"\nBUSCAR CONTA POR NOME DO TITULAR", colors.reset)
                procurarPorTitular()
                keyPress()
                break
            case 5:
                console.log(colors.fg.yellow,"\nATUALIZAR DADOS DA CONTA", colors.reset)
                atualizarConta()
                keyPress()
                break
            case 6:
                console.log(colors.fg.yellow,"\nAPAGAR UMA CONTA", colors.reset)
                deletarContaPorNumero()
                keyPress()
                break
            case 7:
                console.log(colors.fg.yellow,"SAQUE", colors.reset)
                sacar()
                keyPress()
                break
            case 8:
                console.log(colors.fg.yellow,"DEPOSITO", colors.reset)
                depositar()
                keyPress()
                break
            case 9:
                console.log(colors.fg.yellow,"TRANSFERENCIA ENTRE CONTAS", colors.reset)
                transferir()
                keyPress()
                break
            // case 9:
            //     console.log(colors.fg.yellow,"\nBUSCAR CONTA POR NOME DO TITULAR", colors.reset)
            //     procurarPorTitular()
            //     keyPress()
            default:
                console.log("Opção inválida")
        }
    }
}

//opcao1: criar nova conta
function criarConta(){
    console.log("Digite o número da agencia: ")
    const agencia = Input.questionInt("");

    console.log("Digite o nome do titular da conta: ")
    const titular = Input.question("");

    console.log("Selecione o tipo da conta: ")
    const tipo = Input.keyInSelect(tipoContas, "", { cancel: false }) +1;

    console.log("Digite o saldo da conta: ")
    const saldo = Input.questionFloat("");
    switch (tipo) {
        case 1: //conta corrente
            console.log("Digite o limite da conta: ")
            const limite = Input.questionFloat("")
            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
        break;  

        case 2: //conta poupanca
            console.log("Digite o aniversario da conta: ")
            const aniversario = Input.questionInt("")
            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));
        break;
        //nao esta usando default pq ja esta definido os dados de entrada (tipo)
    }
}
//opcao 2 - veja no case 2 do Menu

// opcao 3 - procurar uma conta pelo numero
function buscarContaPorNumero(): void {
    console.log("Digite o número da conta: ")
    const numero = Input.questionInt("")
    contas.procurarPorNumero(numero)
}

// opcao 4 - procurar uma conta pelo nome do titular
function procurarPorTitular() {
    console.log("Digite o nome do titular: ")
    const titular = Input.question("")
    contas.procurarPorTitular(titular); 
}

//opcao 5 - atualizar dados da conta
function atualizarConta(): void{
    console.log("Digite o número da conta: ")
    const numero = Input.questionInt("")
    
    const conta = contas.buscarNoArray(numero)
    //buscarNoArray devolve o objeto
    if(conta !== null){
        
        //guarda os valores atuais da conta
        let agencia = conta.agencia;
        let titular = conta.titular;
        const tipo = conta.tipo;
        let saldo = conta.saldo;
        
        //atualizacao da agencia
        console.log(`Agencia atual: ${agencia}`)
        console.log("Digite a nova agencia \n (Pressione ENTER para manter o valor atual)")
        let entrada = Input.question("");
        
        agencia = entrada.trim() === "" ? agencia : parseInt(entrada); //parseInt para converter para INT

        //atualizacao do titular
        console.log(`Titular atual: ${titular}`)
        console.log("Digite o novo nome do titular \n (Pressione ENTER para manter o valor atual)")
        entrada = Input.question("");
        

        titular = entrada.trim() === "" ? titular : entrada; //n precisa converter pq entrada ja é string

        //atualizacao do saldo
        console.log(`Saldo atual: ${saldo}`)
        console.log("Digite o novo saldo \n (Pressione ENTER para manter o valor atual)")
        entrada = Input.question("");
        
        saldo = entrada.trim() === "" ? saldo : parseFloat(entrada.replace(",", "."));
        //parseFloat nao aceita virgulha -> precisa subtituir por ponto      
        
        //verificar tipo de conta
        switch (tipo) {
        case 1: //conta corrente
            let limite = (conta as ContaCorrente).limite;
            //casting para acessar CC pq limite n pertence a Conta
            
            //atualizacao do limite
            console.log(`Limite atual: ${limite}`)
            console.log("Digite o novo limite \n (Pressione ENTER para manter o valor atual)")
            entrada = Input.question("");
            limite = entrada.trim() === "" ? limite : parseFloat(entrada.replace(",", "."));
            
            contas.atualizar(new ContaCorrente(
                numero, agencia, titular, tipo, saldo, limite));
        break;  

        case 2: //conta poupanca
            let aniversario = (conta as ContaPoupanca).aniversario;
            //casting para acessar CP pq aniversario n pertence a Conta  
            
            //atualizacao do aniversario
            console.log(`Aniversario atual: ${aniversario}`)
            console.log("Digite o novo dia do aniversario \n (Pressione ENTER para manter o valor atual)")
            entrada = Input.question("");
            aniversario = entrada.trim() === "" ? aniversario : parseInt(entrada);

            contas.atualizar(new ContaPoupanca( 
                numero, agencia, titular, tipo, saldo, aniversario));
        break;
        //nao esta usando default pq ja esta definido os dados de entrada (tipo)
    }
    
    } else{
        console.log(colors.fg.red, "\n*** Conta não encontrada ***", colors.reset)
    }
}

//opcao 6 - deletar uma conta
function deletarContaPorNumero(): void{
    console.log("Digite o número da conta: ")
    const numero = Input.questionInt("")
    contas.deletar(numero)
}

//opcao 7 - sacar
function sacar(): void{
    console.log("Digite o número da conta: ")
    const numero = Input.questionInt("")

    const conta = contas.buscarNoArray(numero)
    //buscarNoArray devolve o objeto

    if (conta !== null) {
        console.log("Digite o valor a ser sacado: ")
        const valor = Input.questionFloat("")
        conta.sacar(valor)
    } else{
        console.log(colors.fg.red, "\n*** Conta não encontrada ***", colors.reset)
    }
}

//opcao 8 - depositar
function depositar(): void{
    console.log("Digite o número da conta: ")
    const numero = Input.questionInt("")

    const conta = contas.buscarNoArray(numero)    //buscarNoArray devolve o objeto

    if (conta !== null) {
        console.log("Digite o valor a ser depositado: ")
        const valor = Input.questionFloat("")
        conta.depositar(valor)
    } else{
        console.log(colors.fg.red, "\n*** Conta não encontrada ***", colors.reset)
    }
}

//opcao 9 - transferir
function transferir(): void{
    console.log("Digite o número da conta de origem: ")
    const numeroOrigem = Input.questionInt("")

    console.log("Digite o número da conta de destino: ")
    const numeroDestino = Input.questionInt("")

    const contaOrigem = contas.buscarNoArray(numeroOrigem)
    const contaDestino = contas.buscarNoArray(numeroDestino)

    if (contaOrigem === null ) {
        console.log(colors.fg.red, "\n*** Conta de origem não encontrada ***", colors.reset)
    } else if (contaDestino === null) {
        console.log(colors.fg.red, "\n*** Conta de destino não encontrada ***", colors.reset)
    } else{
        console.log("Digite o valor a ser transferido: ")
        const valor = Input.questionFloat("")
        contas.transferir(numeroOrigem, numeroDestino, valor)
    }
}



//funcao para exibir os dados do dev
export function sobre():void{
    console.log(colors.fg.magentastrong)
    console.log("----------------------------------------------------")
    console.log("Projeto desenvolvido por: ")
    console.log("Clarisse Rodrigues")
    console.log("clarissebleasby@gmail.com")
    console.log("https://github.com/clarodriguess")
    console.log("-----------------------------------------------------")
    console.log(colors.reset)
}

//Funcao para fazer uma pausa entra as opcoes do menu
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}

//criar contas para testes
function criarContasTeste(): void{
   
    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1,  1000.00, 100.00));
 
    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));
 
}
 
main()

