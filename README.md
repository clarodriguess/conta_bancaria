# 🏦 Conta Bancária - Banco Generation Brasil

Projeto desenvolvido em **TypeScript** que simula um sistema bancário com operações CRUD e transações financeiras via terminal interativo.

---

## 📋 Sobre o Projeto

O sistema permite gerenciar contas bancárias do tipo **Conta Corrente** e **Conta Poupança**, com funcionalidades completas de criação, consulta, atualização, exclusão e movimentações financeiras, tudo através de um menu interativo no terminal.

---

## 🗂️ Estrutura de Pastas

```
conta_bancaria/
├── src/
│   ├── controller/
│   │   └── ContaController.ts      # Regras de negócio e gerenciamento das contas
│   ├── model/
│   │   ├── Conta.ts                # Classe base abstrata
│   │   ├── ContaCorrente.ts        # Herda de Conta, possui atributo limite
│   │   └── ContaPoupanca.ts        # Herda de Conta, possui atributo aniversario
│   ├── repository/
│   │   └── ContaRepository.ts      # Interface com os métodos do repositório
│   └── util/
│       ├── Colors.ts               # Utilitário de cores para o terminal
│       └── Input.ts                # Utilitário para leitura de entrada do usuário
├── Menu.ts                         # Menu principal e funções de interação
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## ✨ Funcionalidades

| Opção | Descrição |
|-------|-----------|
| `[1]` Criar Conta | Cria uma nova Conta Corrente ou Conta Poupança |
| `[2]` Listar Todas as Contas | Exibe todas as contas cadastradas |
| `[3]` Buscar Conta por Número | Localiza uma conta pelo número |
| `[4]` Buscar por Titular | Localiza contas pelo nome do titular |
| `[5]` Atualizar Dados da Conta | Atualiza agência, titular, saldo e atributos específicos |
| `[6]` Apagar uma Conta | Remove uma conta pelo número |
| `[7]` Sacar | Realiza saque em uma conta |
| `[8]` Depositar | Realiza depósito em uma conta |
| `[9]` Transferir | Transfere saldo entre duas contas |
| `[0]` Sair | Encerra o sistema |

---

## 🧱 Modelo de Classes

```
Conta (abstract)
├── ContaCorrente   → atributo extra: limite (float)
└── ContaPoupanca   → atributo extra: aniversario (int)
```

- **Conta** é a classe base com os atributos comuns: `numero`, `agencia`, `titular`, `tipo` e `saldo`.
- **ContaController** implementa os métodos do repositório e gerencia o array de contas.
- **ContaRepository** define a interface com os métodos obrigatórios do sistema.

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [TypeScript](https://www.typescriptlang.org/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/clarodriguess/conta_bancaria.git

# Acesse a pasta do projeto
cd conta_bancaria

# Instale as dependências
npm install
```

### Executando o projeto

```bash
# Compilar e rodar
npx ts-node Menu.ts
```

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **ts-node**
- **readline-sync** (para leitura de inputs no terminal)

---

## 👩‍💻 Autora

Desenvolvido por **Clarisse Rodrigues** 

- 📧 clarissebleasby@gmail.com
- 🐙 [github.com/clarodriguess](https://github.com/clarodriguess)
