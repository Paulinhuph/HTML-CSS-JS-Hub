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

// 3 - Condicionais e Fluxos;
// ─────────────────────────────────────────────────────────

// - IF (se): Se for verdadeiro, execute tal cenário.
const idade = 17;
if(idade >= 18) {
    console.log("É maior de idade!");
 
// - Else (senão): Se não for verdadeiro, fluxo entra no else.
} else {
    console.log("É menor de idade");
}

// - ELSE IF (senão se): permite testar múltiplas condições em sequência
const notaDoAluno = 8;
if (notaDoAluno >= 9) {
    console.log('Nota excelente');
} else if (notaDoAluno >= 7) {
    console.log('Nota boa');
} else if (notaDoAluno >= 4) {
    console.log("Nota Mediana")
} else {
    console.log("Nota Ruim.")
}

// - Operador Ternário (?) - Verdadeiro e (:) - se for falso
const idade1 = 18;
const mensagem = idade1 >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem);

notaDoAluno >= 9 ? console.log("Excelente") :
    notaDoAluno >= 7 ? console.log("Boa") :
        notaDoAluno >= 4 ? console.log("Mediana") :
            console.log("Ruim")



// ─────────────────────────────────────────────────────────
// Compreendendo valores TRUTHY e FALSY:
// ─────────────────────────────────────────────────────────

// No JavaScript, todas as expressões são avaliadas como true ou false em contextos condicionais 
// (como em estruturas if e loops). Porém, o JavaScript é flexível e tenta "adivinhar"
//  o que você quer dizer, convertendo automaticamente valores que não são booleanos. 
// Aqui surgem os conceitos de truthy e falsy:

// - Truthy: valores que, embora não sejam exatamente true, são interpretados como verdadeiros.
// - Falsy: valores que, embora não sejam exatamente false, são interpretados como falsos.

// Valores Falsy: false, 0, "", null, undefined, NaN
// Valores Truthy: todos os outros valores

// - Exemplos Falsy: 
if (0) { 

console.log('Verdadeiro'); 

} else { 

console.log('Falso'); // Resultado: Falso 

} 
// ─────────────────────────────────────────────────────────
if ("") { 

console.log('Verdadeiro'); 

} else { 

console.log('Falso'); // Resultado: Falso 

} 
// - Exemplos Truthy:
if ("Olá") { 

console.log('Verdadeiro'); // Resultado: Verdadeiro 

} 
// ─────────────────────────────────────────────────────────
if (42) { 

console.log('Verdadeiro'); // Resultado: Verdadeiro 

} 
// 
if ({}) { 

console.log('Verdadeiro'); // Resultado: Verdadeiro 

} 

// A ideia por trás dessa funcionalidade é permitir que você escreva código mais simples e conciso. 
// Por exemplo, ao verificar se uma string está vazia ou não, você pode simplesmente fazer:
let nome = "";

if (nome) {
    console.log("Nome Informado!");
} else {
    console.log("Nome não informado!"); // Resultado: Nome não informado!
}
// Aqui, você não precisa escrever explicitamente if (nome !== ""). 
// O JavaScript já entende o que você quer.

// - Condições Switch: Múltiplos Valores
const notasDoAluno = 9;
switch(notasDoAluno) {
    case 10:
    case 9:
        console.log("Excelente");
        break // para o bloco aqui se entrar nele
    case 8:
    case 7:
        console.log("Bom");
        break
    case 6:
    case 5:
    case 4:
        console.log("Mediana");
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('ruim');
        break
    // se Nenhum valor for acessado, usamos o Default
    default:
        console.log("Valor Inválido!");
        break;
}

// ─────────────────────────────────────────────────────────
// Lista de Exercícios: Condições e Fluxos
// ─────────────────────────────────────────────────────────

// 1. Verificação de idade para compra de bebida
// Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". 
// Caso contrário, mostre "Venda proibida para menores de 18 anos".
let idade = 21;
if (idade >= 18) {
    console.log("Pode comprar Bebida alcoólica!");
} else {
    console.log("Venda Proibida para Menores de 18 anos!");
}

// 2. Saudação de acordo com a hora
// Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; 
// caso contrário, "Boa noite".
let horaAtual = 13;
if (horaAtual >= 6 && horaAtual < 12) {
    console.log("Bom dia!");
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log("Boa Tarde!");
} else {
    console.log("Boa noite!");
}

// 3. Verificação de número positivo ou negativo
// Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.
let number = -7;
if (number > 0) {
    console.log("Número Positivo!");
} else if (number < 0) {
    console.log("Número Negativo!");
} else {
    console.log("Número Igual a Zero!");
}

// 4. Conversão de nota em conceito
// Crie uma variável nota entre 0 e 10. 
// Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).
const notaA = 8;
// A (9-10)
if (notaA >= 9) {
    console.log("A");
} else if (notaA >= 8) {
    console.log("B");
} else if (notaA >= 6) {
    console.log("C");
} else if (notaA >= 4) {
    console.log("D")
} else {
    console.log("E")
}

// 5. Número par ou ímpar com ternário
// Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.
let numero = 12;
const parOuImpar = (numero % 2 == 0) ? "Par" : "Ímpar";
console.log(parOuImpar);

// 6. Menu com switch-case
// Crie uma variável opcao com valores de 1 a 3. 
// Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".
let opcao = 1;
switch (opcao) {
    case 1:
        console.log("1 - Cadastrar");
        break;
    case 2:
        console.log("2 - Listar");
        break;
    case 3:
        console.log("3 - Sair");
        break;
    default:
        console.log("Opção Inválida!");
        break;
}    

// 7. Validação de campo obrigatório
// Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". 
// Caso contrário, mostre "E-mail válido".
let email = ""
if (email === "") {
    console.log("Preencha o campo de e-mail.")
} else {
    console.log("E-mail Válido!");
} 

// 8. Validação de senha segura
// Crie duas variáveis:
// senha
// senhaValida (valor true ou false, definido manualmente)
// Se senhaValida for verdadeira, mostre "Senha válida"
// Caso contrário, mostre "Senha muito curta".
let senha = 1234;
let senhaValida = true;
if (senhaValida === true) {
    console.log("Senha Válida.")
} else {
    console.log("Senha muito curta!")
}

// 9. Compra com saldo
// Crie duas variáveis: saldoDisponivel e valorCompra. 
// Se o saldo for suficiente, mostre "Compra aprovada". 
// Caso contrário, "Saldo insuficiente".
let saldoDisponivel = 2000;
let valorCompra = 1000;
if (saldoDisponivel >= valorCompra) {
    console.log("Compra Aprovada!")
} else {
    console.log("Saldo Insuficiente!")
}

// 10. Validação de formulário completo
// Crie três variáveis:
// nome
// email
// idade
// Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).
// Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
// Caso contrário, mostre "Por favor, preencha todos os campos corretamente".

let nome = "Paulo Henrique";
let email = "paulo@teste.com";
let idade = 21;
formularioValido = true;
if (formularioValido === True) {
    console.log("Formulário enviado com sucesso");
} else {
    console.log("Por favor, preencha todos os campos corretamente");
}