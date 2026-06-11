js// ███████ ███████ ████████ ██    ██ ██████   ██████  ███████
// ██      ██         ██    ██    ██ ██   ██ ██    ██ ██
// █████   ███████    ██    ██    ██ ██   ██ ██    ██ ███████
// ██           ██    ██    ██    ██ ██   ██ ██    ██      ██
// ███████ ███████    ██     ██████  ██████   ██████  ███████

// ██████  ███████     ██       ██████   ██████  ██  ██████   █████
// ██   ██ ██          ██      ██    ██ ██       ██ ██      ██   ██
// ██   ██ █████       ██      ██    ██ ██   ███ ██ ██      ███████
// ██   ██ ██          ██      ██    ██ ██    ██ ██ ██      ██   ██
// ██████  ███████     ███████  ██████   ██████  ██  ██████  ██   ██

// ███████ ██ ███    ██ ████████  █████  ██   ██ ███████
// ██      ██ ████   ██    ██    ██   ██  ██ ██  ██
// ███████ ██ ██ ██  ██    ██    ███████   ███   █████
//      ██ ██ ██  ██ ██    ██    ██   ██  ██ ██  ██
// ███████ ██ ██   ████    ██    ██   ██ ██   ██ ███████

//
// ─────────────────────────────────────────────────────────
//   Estudos de Lógica e Sintaxe com JS
// ─────────────────────────────────────────────────────────

// 1 - Variáveis: 
// ─────────────────────────────────────────────────────────

// Variável Global: Evite ao máximo variáveis globais.
idade = 21 // Antiga!

// Var (forma antiga)
var idade = 21

// Let (use se você sabe que o valor da variável mudará.) 
let idade = 21

// Const (use se o valor não ser mudado ou não pode usar)
const pi = 3.14

// - Tipos de Variáveis:
let nome = 'Ana'
let idade = 23
let altura = 1.67

// typeof mostra o tipo
console.log(typeof nome) // String
console.log(typeof idade) // number
console.log(typeof altura) // number

let estaChovendo = false
console.log(typeof estaChovendo) // boolean

let cidade
console.log(typeof cidade) // undefined

let aprendeuJS = null
console.log(typeof aprendeuJS) // object

// - Legibilidade de Variáveis:
// Deixe claro o nome da variável para entender o contexto
let altura = 1.70
console.log(altura)

// Maiusc e Minusc fazem diferença (Case Sensitive):
let preco = 10
let Preco = 20
console.log('Preço: ', preco) // 10
console.log('Preço: ', Preco) // 20

// Lista de Exercícios sobre Variáveis: 
// 1 - Boas-vindas personalizadas: Crie uma variável chamada nome e atribua seu nome completo. Depois, 
// use console.log() para exibir a mensagem: 
// "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

let nome = 'Paulo Henrique Melo Ribeiro';
console.log("Olá, " + [nome] + "Seja Bem-Vindo(a) ao Curso de JavaScript!");

// 2. Cálculo de idade: Crie duas variáveis: anoAtual e anoNascimento. 
// Calcule a idade da pessoa subtraindo os valores e exiba no console:
//  "Você tem [idade] anos."

let anoAtual = 2026;
let anoNascimento = 2004;

let calculoIdade = (anoAtual - anoNascimento);
console.log("Você tem", + [idade], "anos.");

// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: 
// cidade, estado e pais. Em seguida, mostre no console: 
// "Você está em Cidade - Estado, País."

let cidade = 'São Paulo';
let estado = 'SP'
let pais = 'Brazil'
console.log("Você está em " + cidade + "-" + estado + "," + pais + ".");

// 4. Tipo da variável:
// Crie uma variável chamada temCarteira com valor true ou false. 
// Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

let temCarteira = true;
console.log(typeof temCarteira)

//5. Simulação bancária simples: Crie uma variável saldo iniciando com 0. 
// Depois, simule um depósito de 200 e um saque de 50. 
// Mostre o saldo final no console com uma frase explicando.
let contaBancaria = 0;
console.log("SaldoAtual: R$ " + contaBancaria);

let deposito = contaBancaria + 200;
console.log("Saldo Atual: R$ " + deposito);

let saque = deposito - 50;
console.log("Saldo Atual: R$ " + saque);

// 6. Média de notas: 
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, 
// contendo suas respectivas notas. 
// Calcule e mostre a média final com uma mensagem.

let matematica = 8.5;
let portugues = 9.4;
let ciencias = 7.5;

let media = (matematica + portugues + ciencias) / 3;
console.log("Média Final: " + media)

// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e
//  mostre o novo salário com uma frase explicando o motivo.

let salario = 3000;
let aumento = (3000 * 0.10) + salario;

console.log("Novo Aumento do Salário devido ajuste no Sindicato: R$ " + aumento)

// 8. Contador de cliques: 
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e 
// incremente 1 a cada "simulação de clique". 
// Mostre o total após 3 simulações.

let cliques = 0;
cliques++;
cliques++;
cliques++;
console.group("O botão foi clicado " + cliques + "vezes.")

// 9. Constantes não podem ser alteradas 
// Crie uma constante chamada PI com o valor 3.14. 
// Tente alterar seu valor e observe o erro gerado. 
// Depois, explique por que isso acontece.

const pi = 3.14;

const pi = 3

console.log(pi) // O erro ocorrerá devido a CONST, pois não podem ser modificadas

// 10. Concatenando tipos diferentes 
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. 
// Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

let mensagem = "Sua idade é: ";
let numero = 21;
let mensagNumero = mensagem + numero;
console.log(mensagNumero) // "Sua idade é: 21"
console.log(typeof mensagNumero) // String

// ─────────────────────────────────────────────────────────