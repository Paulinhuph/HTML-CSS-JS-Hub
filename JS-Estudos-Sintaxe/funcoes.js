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

// 4 - Funções;
// ─────────────────────────────────────────────────────────
// É um bloco de código reutilizável projetados para executar tarefas específicas.
// Entrada -> processamento -> saída (opcional)

function f(x) {
    return x + 2;
}
console.log(f(2)); // 4
console.log(f(10)); // 12


function saudacao(nome) { // Nome é o parâmetro
    console.log("Olá,", nome);
}
saudacao('Paulo') // Paulo é o "argumento"


function calculadorDobro(numero) { 
    return numero * 2; // retorna o valor
}
const numeroDrobado = calculadorDobro(10) // Guardamos o valor em uma variável
console.log(numeroDrobado) // Exibe o resultado


// - Sintaxe de (Arrow) Functions:

// Saudação Personalizado
const saudacao = (nome) => {
    console.log('Vida Longa ao', nome);
}
saudacao('Paulo')
// ─────────────────────────────────────────────────────────
// Simplificada
const saudacao = nome => console.log('Olá', nome);
// ─────────────────────────────────────────────────────────

// Calculadora do Dobro de um Número
const calculadorDobro = (numero) => {
    return numero * 2
}
const numeroDobrado = calculadorDobro(4)
console.log("O dobro é", numeroDobrado)
// ─────────────────────────────────────────────────────────
// Simplificada:
const calculadorDobro = numero => numero * 2
const numeroDobrado = calculadorDobro(4)
console.log("O dobro é", numeroDobrado)


// - ENTENDENDO CALLBACKS E HOF:

// HOF -> Higher-Order Function === função que recebe outra função como parametro

// CALLBACKS -> Um callback em JavaScript é uma função passada como argumento para outra função, 
// sendo executada após a conclusão de uma tarefa.

function calcular(number1, number2, operacao) {
    return operacao(number1, number2)
}

function soma(number1, number2) {
    return number1 + number2
}

function divisao(number1, number2) {
    return number1 / number2
}

const resultadoSoma = calcular(3, 8, soma) // Soma é um callback
console.log("Soma: ", resultadoSoma)

const resultadoDivisao = calcular(32, 8, divisao) // Divisão é um callback
console.log("Divisão: ", resultadoDivisao)

// - FUNÇÕES GLOBAIS: já prontas para utilização

// (SetTimeout) é um método do JavaScript usado para executar uma função apenas uma vez, 
// após um período de tempo determinado. 
// Ele é assíncrono, permitindo que o restante do código continue rodando enquanto aguarda a contagem
function saudacao() {
    console.log("E aí, beleza?")
}
setTimeout(saudacao, 2000) // Milisegundos


// (SetInterval) O setInterval no JavaScript executa uma função repetidamente em um intervalo de tempo definido. 
// Como ele não possui um método nativo de pausa ou retomada (resume), a melhor prática para "pausar e retomar" 
// um intervalo é limpá-lo usando clearInterval e recriá-lo quando desejar voltar
let contador = 0
const id = setInterval(() => {
    contador++
    console.log('Tempo decorrido (em segundos):', contador)
    if (contador == 10) {
        clearInterval(id) 
    }
}, 1000)


// - ENTRADA DE DADOS PELO TERMINAL

// Importa o módulo nativo 'readline' do Node.js para permitir interação com o usuário pelo terminal
const readline = require('readline');
// Cria a interface de leitura e escrita configurando a entrada (teclado) e saída (tela/terminal)
const leitor = readline.createInterface({
    input: process.stdin,   // stdin = standard input (entrada padrão / teclado)
    output: process.stdout // stdout = standard output (saída padrão / tela)
});
// Faz a primeira pergunta ao usuário
leitor.question('Qual é seu nome? ', (nome) => {
    // Exibe a mensagem de boas-vindas usando a variável 'nome' recebida
    console.log("Olá,", nome);
    console.log('Boas-vindas ao nosso sistema!');
    // Faz a segunda pergunta DENTRO da primeira para garantir a ordem correta de execução
    leitor.question('Qual é a sua idade? ', (idade) => { 
        // Converte o texto recebido em número e verifica se é maior ou igual a 18
        // (Nota: No Brasil, a CNH exige 18 anos completos, por isso o ideal é usar >=)
        if (Number(idade) >= 18) {
            // Executa este bloco caso a condição do 'if' seja verdadeira
            console.log('Uau! Você já pode tirar a sua CNH');
        } else {
            // Executa este bloco caso a condição do 'if' seja falsa
            console.log('Você ainda não pode tirar a sua CNH!');
        }
        // Fecha a interface de leitura, liberando o terminal e encerrando o programa com segurança
        leitor.close();
    });
});

// DESAFIO: QUIZ JS
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n> ', (resposta1) => {
    if (resposta1 == 'b') {
        acertos++;
    }
    rl.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n> ', (resposta2) => {
        if (resposta2 == 'c') {
            acertos++;
    }   
        rl.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n> ', (resposta3) => {
            if (resposta3 == 'b') {
                acertos++;
            }
            if (acertos == 3) {
                console.log('Parabéns, você gabaritou!');
            } else if (acertos == 2) {
                console.log('Muito bom, continue assim!');
            } else if (acertos == 1) {
                console.log('Bom! Continue estudando');
            } else {
                console.log('Continue praticando e tente novamente!');
            }
            rl.close();
        });
    });
});

// DESAFIO: QUIZ VARIADO (Filosofia)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de Filosofia!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

rl.question('1) Quem é considerado o pai da filosofia ocidental e conhecido pela frase "Só sei que nada sei"?\n(a) Platão\n(b) Sócrates\n(c) Aristóteles> ', (resposta1) => {
    if (resposta1 == 'b') {
        acertos++;
    }
    rl.question('2) Qual mito criado por Platão discute a passagem da ignorância para o conhecimento verdadeiro?\n(a) Mito da Caverna\n(b) Mito de Sísifo\n(c) Mito de Prometeu> ', (resposta2) => {
        if (resposta2 == 'a') {
            acertos++;
    }   
        rl.question('3) Qual corrente filosófica foca na busca pela felicidade através do prazer moderado e da ausência de perturbação?\n(a) Estoicismo\n(b) Cinismo\n(c) Epicurismo> ', (resposta3) => {
            if (resposta3 == 'c') {
                acertos++;
            }
            if (acertos == 3) {
                console.log('Parabéns, você gabaritou!');
            } else if (acertos == 2) {
                console.log('Muito bom, continue assim!');
            } else if (acertos == 1) {
                console.log('Bom! Continue estudando');
            } else {
                console.log('Continue praticando e tente novamente!');
            }
            rl.close();
        });
    });
});

// ─────────────────────────────────────────────────────────
// Lista de Exercícios: Funções
// ─────────────────────────────────────────────────────────
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
// 1 - Função de saudação
// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.
function saudacao() {
    console.log('Olá! Seja Bem-Vindo(a)');
}
saudacao();

// 2. Função com parâmetros
// Crie uma função apresentarPessoa(nome, idade) que exibe no console: 
// "Olá, meu nome é [nome] e tenho [idade] anos."
let nome = "Paulo";
let idade = 21;

function apresentarPessoa(nome, idade) {
   
    return "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";
};

apresentar = apresentarPessoa(nome, idade);
console.log(apresentar)

// 3. Cálculo de IMC
// Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// A função deve calcular o IMC utilizando a fórmula:
// IMC = peso / (altura * altura)
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc
};
resultado = calcularIMC(78, 1.70);
console.log("Seu IMC é: ", resultado);

// 4. Verificar aprovação
// Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.
function verificarAprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado!";
    } else {
        return "Reprovado! Não Atingiu a média necessária.";
    }
};
verificacao = verificarAprovacao(5);
console.log(verificacao)

// 5. Número par ou ímpar
// Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. 
// Teste a função com diferentes valores.
function ehPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

parOuImpar = ehPar(11);
console.log(parOuImpar); 

// 6. Função soma
// Crie uma função que recebe dois números e retorna a soma deles. 
// Exiba o resultado no console com uma frase completa.
function soma(numero1, numero2) {
    return numero1 + numero2;
};
resultSoma = soma(5, 10);
console.log("A soma é:", resultSoma);

// 7. Reutilizando código
// Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.~
// A função deve receber dois parâmetros: valorCompra e valorPago.
// A função deve:
// calcular o valor do troco
// retornar o valor calculado
// Depois, utilize o retorno da função para exibir o valor do troco no console.
function calcularTroco(valorCompra, valorPago) {
    troco = valorPago - valorCompra;
    return troco
};
resultadoTroco = calcularTroco(2000, 3000);
console.log("Seu troco foi de: R$", resultadoTroco);

// 8. Arrow function
// Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.
const soma = (numero1, numero2) => {
    return numero1 + numero2
};
console.log("A soma é:", soma(10, 20));

// 9. Callback simples
// Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. 
// Teste passando uma função que imprime "Executando ação!".
function executarAcao(acao) {
acao()
}
executarAcao(function() {
console.log("Executando Ação!");
});

// 10. Desafio do quiz
// Crie uma função fazerPergunta(pergunta, respostaCorreta). 
// A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).
function fazerPergunta(pergunta, respostaCorreta) { 
let respostaUsuario = respostaCorreta; // simulação da resposta 
if (respostaUsuario === respostaCorreta) { 
console.log("Resposta correta!"); 
} else { 
console.log("Resposta errada!"); 
} 
} 
fazerPergunta("Qual é a capital do Brasil?", "Brasília"); 