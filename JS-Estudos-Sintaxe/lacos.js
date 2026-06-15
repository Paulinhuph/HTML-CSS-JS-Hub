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

// 4 - Laços;
// ─────────────────────────────────────────────────────────

// - FOR(para): repetição usada para executar um bloco de código 
// várias vezes de forma controlada.

// Contador de 1 a 10
for (let contador = 1; contador <= 10; contador++) {
    console.log('Número:', contador);  // Imprime de 1 a 10
}
// Percorre apenas os números pares
for(let numero = 0; numero <= 15; mumero++) {
    if (numero % 2 == 0) {
        console.log("Par:", numero)
    }
}
// Percorre tamanho da palavra usando length (indica quantos caractere uma string possui)
// palavra[1] - pega a letra na posição indicada
const palavra = 'calopsita';
for(let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador]);
}

// Também permite que você controle mais de uma variável:
for (let i = 0, j = 10; i < j; i++, j--) { 
console.log(`i: ${i}, j: ${j}`); 
}
// Resultado: 
// i: 0, j: 10 
// i: 1, j: 9 
// i: 2, j: 8 
// i: 3, j: 7 
// i: 4, j: 6


// - WHILE(Enquanto): estrutura de repetição em JavaScript que executa um bloco de código 
// continuamente enquanto uma condição específica for verdadeira

// Contador até 10
let contador = 1;
while(contador <= 10) {
    console.log("Número:", contador);
    contador++
}

// - DO WHILE: estrutura de repetição que 
// executa um bloco de código pelo menos uma vez, testando a condição apenas no final.

do {
  // Código que será executado PRIMEIRO
} while (condicao); // A checagem acontece no FINAL


let numero = 1;
do {
    console.log('Número:', numero);
    numero++
} while (numero <= 10)

// - DESAFIO - Contar quantos números pares e impares nós temos entre 0 e 100:
let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for (let numero = 0; numero <= 100; numero++) {
    if (numero % 2 == 0) {
        totalNumerosPares++;
    } else {
        totalNumerosImpares++;
    }
}
console.log("Total de Números Pares: ", totalNumerosPares);
console.log("Total de Números Ímpares: ", totalNumerosImpares);


// ─────────────────────────────────────────────────────────
// Lista de Exercícios: Laços de Repetição
// ─────────────────────────────────────────────────────────
 
// 1. Contador de 1 a 10
// Use um for para mostrar no console os números de 1 até 10, um por linha.
for (let contador = 1; contador <= 10; contador++) {
    console.log(contador)
}

// 2. Soma de 1 a 100
// Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.
let soma = 0
for (let numero = 1; numero <= 100; numero++) {
    soma += numero // Pega o Valor de número e Soma um ao outro
}    
console.log("Somma de Todos os Números:", soma)
 
// 3. Tabuada personalizada
// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.
let numero = 5
for (let i = 1; i < 10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i));
}

// 4. Contagem regressiva
// Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".
let contador = 10;
while (contador >= 0) {
    console.log("Número:", contador);
    contador--;
}

// 5. Receber números até digitar 0
// Simule a digitação de números usando uma variável numeroDigitado.
// Use um do...while para repetir a execução até que o valor seja 0.
// Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.
let numeroDigitado = 0;
let quantidade = 0;
let repeticao = 0;
do {
    if (repeticao === 0) {
        numeroDigitado = 5;
    } else if (repeticoes === 1) {
        numeroDigitado = 10;
    } else {
        numeroDigitado = 0;
    }

    if (numeroDigitado !== 0) {
        quantidade++;
    }
} while (numeroDigitado !== 0);
console.log("Total de números Digitados: " + quantidade);

// 6. Jogo do número secreto
// Crie uma variável numeroSecreto com valor fixo.
// Simule até 3 tentativas usando um for.
// Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:
// "Acertou!" se for igual
// "Tente novamente" se for diferente
// 📌 Observação:
// As tentativas devem ser simuladas por variáveis dentro do laço.
let numeroSecreto = 10;
for (let i = 1; i <= 3; i++) {
    let numeroTentado;
    if (i === 1) {
        numeroTentado = 3;
    } else if (i === 2) {
        numeroTentado = 5;
    } else {
        numeroTentado = 7;
    }
    if (numeroTentado === numeroSecreto) {
        console.log("Acertou!");
    } else {
        console.log("Tente Novamente!")
    }
}

// 7. Idade ao longo dos anos
// Crie uma variável anoNascimento e anoAtual. 
// Use um for para listar a idade da pessoa ano a ano até o ano atual.
let anoNascimento = 2004;
let anoAtual = 2026;
for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log("Em " + ano + " você tinha " + (ano - anoNascimento) + " anos."); 
}

// 8. Listando números pares
// Mostre todos os números pares entre 1 e 50 usando for.
for (let i = 1; i <= 50; i++) {
if (i % 2 === 0) {
    console.log("Pares: ", i)
}
}

// 9. Contar múltiplos de 3 entre 1 e 100 

let multiplosDe3 = 0; 

for (let i = 1; i <= 100; i++) { 

if (i % 3 === 0) { 

multiplosDe3++; 

} 

} 

console.log("Números entre 1 e 100 divisíveis por 3: " + multiplosDe3); 

 

// 10. Menu com repetição 

let opcao;
let passo = 0;

do {
  // simulação da escolha do usuário
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);

