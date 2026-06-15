// ███████ ███████ ████████ ██    ██ ██████   ██████  ███████
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

// 2 - Operadores; 
// ─────────────────────────────────────────────────────────

// 1 - OPERADORES ARITMÉTICOS:

const x = 10;
const y = 10;

// (+) - Soma
let soma = x + y; // 20
console.log('Soma: ', soma);

// (-) - Subtração
let subtracao = x - y; // 0
console.log('Subtração: ', subtracao);

// (*) - Multiplicação
let multiplicacao = x * y; // 100
console.log('Multiplicação: ', multiplicacao);

// (/) - Divisão
let divisao = x / y; // 1
console.log('Divisão: ', divisao);

// (%) - Resto da Divisão
let restoDivisao = x % y; // 0
console.log('Resto da Divisão: ', restoDivisao);

// (**) - Potência 
let potencia = x ** y; // 10000000000
console.log('Potência: ', potencia);

// Incrementos
let contador = 5;
contador++; // É a mesma coisa que contador = contador + 1
console.log('Incremento: ', contador);

// Descrementos
let contador = 6;
contador--; // contador = contador - 1
console.log('Decremento: ', contador);

// - Aplicando operadores de atribuição
// Para variáveis que não são constantes, como let numeroTres, 
// podemos realizar operações de multiplicação, divisão, adição e 
// subtração com atribuição. 
// Por exemplo, numeroTres *= 2 multiplica o valor atual por 2

let numeroTres = 2;
numeroTres *= 2;
console.log(numeroTres);

numeroTres -= 2;
numeroTres += 3;
numeroTres -= 3;
numeroTres *= 3;
numeroTres /= 3;

// Podemos usar operadores como +=, -=, *=, e /= 
// para realizar operações matemáticas com atribuição.

// 2 - OPERADORES DE COMPARAÇÃO:

// (=) Operador de Atribuição
const idadeNeymar = 35;
const minhaIdade = 21;

// (==) Compara dois valores: saber se é true ou false (Números n iguais então é False)
const comparacao = idadeNeymar == minhaIdade; // False, não é igual.

// (===)  Compara o valor e o tipo (ex: 21 === "21" dá false, porque um é número e o outro é texto)
const comparacaoEstrita = idadeNeymar === minhaIdade; // False, não é igual.

// (>) Maior que: compara se um valor é maior que outro 
const maior = minhaIdade > idadeNeymar; // False, não é maior.

// (<) Menor que: compara se um valor é menor que outro
const menor = idadeNeymar < minhaIdade; // False, é maior.

// (>=) Maior ou Igual a que: compara se um valor é maior ou igual a outro valor
const maiorOuIgual = idadeNeymar >= minhaIdade; // True, não é igual mas é maior

// (<=) Menor ou Igual a que: compara se um valor é menor ou igual a outro valor
const menorOuIgual = minhaIdade <= idadeNeymar; // True, não é igual mas é menor

// (!=) São diferentes? 
const comparacaoDiferente = idadeNeymar != minhaIdade; // True, são valores diferentes

// (!==) São estritamente diferentes?
const comparacaoEstritaDifente = idadeNeymar !== minhaIdade; // True, são valores diferentes

// 3 - OPERADORES LÓGICOS:

// AND == && (Tudo precisa ser verdadeiro)
const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCnh = true; // Tem CNH
const podeDirigir = maiorDeIdade && possuiCnh; // AND
console.log('Pode Dirigir? ', podeDirigir); // True, maior de idade e tem CNH

// OR == || (Apenas um precisa ser verdadeiro)
const podeViajarSozinho = maiorDeIdade || possuiCnh; // OR
console.log('Pode viajar sozinho? ', podeViajarSozinho); // True, maior de idade ou tem cnh

// NOT == ! (Inverte o valor booleano)
const idade1 = 17;
const maiorDeIdade1 = idade1 >= 18; // false (17 não é maior ou igual a 18)
const precisaDeAcompanhante = !maiorDeIdade1; // true (Inverteu false para true)
console.log('Precisa de acompanhante? ', precisaDeAcompanhante); // True


// ─────────────────────────────────────────────────────────
// DESAFIO CALCULADORA DE TROCO
// ─────────────────────────────────────────────────────────
console.log("Boas Vindas a calculadora de Trocos!")
let valorCompra = 17.50;
let valorPago = 20;
let troco = valorPago - valorCompra;
console.log("Seu Troco é: R$ ", troco);

// ─────────────────────────────────────────────────────────
// Lista de Exercícios:
// ─────────────────────────────────────────────────────────

// 1. Verificação de maioridade
// Crie uma variável idade.
// Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18.
let idade = 18;
let maioridade = idade >= 18;
console.log(maioridade) // True

// 2. Situação do aluno
// Crie duas variáveis com notas de um aluno.
// Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7.
let nota1 = 8.5;
let nota2 = 7.6;
let media = (nota1 + nota2) / 2;
console.log(media >= 7);

// 3. Simulação de troco
// Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.
let valorCompra = 35.90;
let valorPago = 50;
let calculoTroco = valorPago - valorCompra;
console.log("Troco Devolvido: R$ ", calculoTroco);

// 4. Validação de senha
// Crie duas variáveis com senhas digitadas em momentos diferentes.
// Exiba no console o resultado da comparação que verifica se as senhas são iguais.
let senhaDigitada = "1234";
let senhaDigitada1 = "1234";
console.log(senhaDigitada === senhaDigitada1);

// 5. Controle de faltas
// Crie as variáveis totalAulas e faltas.
// Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que 
// verifica se as faltas ultrapassam esse limite.
let totalAulas = 50;
let faltas = 25;
let limite = (50 * 0.25);
console.log(faltas > limite);


// 6. Verificação de login
// Crie duas variáveis booleanas: temLogin e temSenha.
// Exiba no console o resultado da expressão lógica que verifica se ambas são verdadeiras.
let temLogin = true;
let temSenha = true;
console.log(temLogin && temSenha);

// 7. Valor negado
// Crie uma variável booleana chamada disponível. 
// Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.
let disponivel = true;
console.log("Disponibilidade Inversa: ", !disponivel);

// 8. Condições compostas
// Crie duas variáveis numéricas.
// Exiba no console o resultado da expressão que verifica se:
// os dois números são pares 
// os dois números são iguais.
let number1 = 2;
let number2 = 4;
console.log("Os Números são pares? ", number1 % 2 == 0 && number2 % 2 == 0);
console.log("Os Números são iguais? ", number1 === number2);

// 9. Calculadora de porcentagem
// Calcule quanto é 15% de 120 usando operadores matemáticos. 
// Mostre a frase: "15% de 120 é igual a X."
let calculoPorcentagem = 120 * 0.15;
console.log("15% de 120 é igual a: ", calculoPorcentagem);

// 10. Ordem de operações
// Escreva a expressão 2 + 3 * 5. 
// Mostre o resultado e explique por que a multiplicação foi feita antes da soma.
let ordem = 2 + 3 * 5;
console.log("Resultado da expressão 2 + 3 * 5: " + resultado); 
// A multiplicação é feita primeiro por causa da ordem de precedência dos operadores. 
// 3 * 5 = 15, após 2 + 15 = 17 

// ─────────────────────────────────────────────────────────
// - Ordem de Operadores:
// ─────────────────────────────────────────────────────────

// 1 - Parênteses ( )

// 2 - Multiplicação *, Divisão /

// 3 - Adição +, Subtração -

// 4 - Comparações (>, <, >=, <=, ==, !=)

// 5 - Operadores lógicos (!, &&, ||)

