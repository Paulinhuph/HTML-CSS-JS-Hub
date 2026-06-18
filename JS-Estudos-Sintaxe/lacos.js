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

// ─────────────────────────────────────────────────────────
// Praticando: Laços de Repetição
// ─────────────────────────────────────────────────────────
// RELEMBRANDO!!
// FOR: for (inicialização; condição; atualização) {...}
// - Inicialização: executada uma única vez antes do laço começar
// - Condição: Avaliada antes de cada iteração. Se for True, o laço continua; se for false, o laço para.
// - Atualização: Executada após cada iteração do laço.
// Exemplo:
const numero = 5; // Tabuada do 5
for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
};
 
// BREAK: O break interrompe o laço quando encontrado, independentemente da condição de continuidade 
// ainda ser verdadeira.
for (let contador = 1; contador <= 50; contador++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`);
        break;
    }
}

// CONTINUE: O continue pula para a próxima iteração e desconsidera o restante do bloco atual.
let contador = 0;

for (let i = 1; i <= 20; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if (numero % 5 === 0) {
        continue;
    }
    contador++;
}
console.log('contador', contador);

// WHILE: while(condicao) {bloco de codigo};
// while significa que, enquanto for verdadeira, o bloco de código será executado.
// Exemplo: 
let numeroSecreto = 8;
let numeroAleatorio = 0;
let contador = 0;
while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
}
console.log(`adivinhou em ${contador} tentativas`);

// DO... WHILE: do { // bloco de código} while (condição);
// Exemplo:
let numeroRandom;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom);

// FOR | WHILE | DO... WHILE
// Número definido de iterações |	Número indefinido de iterações	| Ao menos uma iteração
// Possui instruções de incremento/contador | Incremento/contador gerenciado externamente | Incremento/contador gerenciado externamente

// - Propriedade .LENGTH
const palavra = "papagaio"; 

for (i=0; i < palavra.length; i++) { 
    console.log(palavra[i]); 
}; // 0 1 2 3 4 5 6 7
    // [p	a	p	a	g	a	i	o]

// - DESAFIOS
// ─────────────────────────────────────────────────────────

// Contagem de números
// Você está criando um aplicativo para exibir a sequência de números até um valor que o usuário forneceu. 
// O objetivo é mostrar todos os números a partir de 1 até o valor informado pelo usuário, de forma ordenada e crescente.
const numeroFinal = 30;
for (let i = 1; i <= numeroFinal; i++) {
    console.log(i)
}

// Você é uma pessoa desenvolvedora de interface em uma startup de tecnologia aeroespacial e precisa criar uma contagem regressiva automática para o painel de lançamento. 
// A contagem deve começar de 10 até 0, exibindo “Lançar!” ao final.
// Crie um programa que conte de 10 até 0 e exiba a mensagem “Lançar!” ao final.
let numeroFinalReverso = 20;
for (let i = numeroFinalReverso; i >= 0; i--) {
    console.log(i);
} 
console.log("Lançar!");

// Listando números pares
// Você está criando um sistema de análise para um cliente que precisa identificar todos os números pares dentro de um intervalo informado. Ele quer saber quais valores são múltiplos de 2, para aplicar um filtro em dados financeiros.
// Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário
const numeroFinal = 300;
for (let i = 1; i <= numeroFinal; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada por um novo usuário. 
// Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.
// Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?

let senhaCadastrada = "seguranç@2025";
for (let i = 1; i < senhaCadastrada.length; i++) {
    console.log(`Caractere ${i + 1}: ${senhaCadastrada[i]}`);
}

// Solicitando nomes até digitar ''fim''
// Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser, um por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).
// Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles, e encerre somente quando encontrar o valor "fim".
const nomes = ["Ana", "Bruno", "Carla", "fim", "Daniel"]
let i = 0;
while (nomes[i] !== "fim") {
    console.log("Nome:", nomes[i]);
    i++;
}

// Você está trabalhando no sistema de controle de acesso de um laboratório secreto. 
// Por questões de segurança, o número 10 deve ser evitado a todo custo. O contador de testes deve exibir os números normalmente, 
// mas precisa ser encerrado imediatamente ao chegar nesse número.
// rie um programa que inicie a contagem em 1 e siga até 20. 
// Se o número 10 for alcançado, o sistema deve exibir uma mensagem de alerta e interromper a contagem.

let numeroProibido = 10;
for (let i = 1; i <= 20; i++) {
    if (i === numeroProibido) {
        console.log('Número proibido encontrado! Encerrando...');
        break;
    }
    console.log(i);
}

// Você está desenvolvendo uma funcionalidade para um aplicativo de finanças pessoais. 
// Um dos recursos permite simular quanto uma pessoa economizaria em um período de tempo, 
// iniciando em R$1 no primeiro dia e aumentando esse valor em R$1 a cada novo dia. 
// Ou seja, a cada dia que passa, ela economiza R$1 a mais do que no anterior.
// Por exemplo, em 10 dias ela economizaria:
// Dia 1: R$1
// Dia 2: R$3
// Dia 3: R$6
// ...
// Dia 10: R$55
// Crie um programa que calcule o total economizado ao final de 10 dias.
let totalDias = 10;
let economia = 0
let dia = 1;

do {
    economia += dia;
    dia++;
} while (dia <= totalDias);
console.log(`Total economizado: R$ ${economia}`);


// Você recebeu a tarefa de automatizar o painel de uma linha de empacotamento em um centro de distribuição. 
// A cada ciclo, uma nova caixa é processada. A linha só pode processar no máximo 5 caixas válidas por vez. 
// Mas, algumas caixas com número de identificação negativo precisam ser ignoradas, pois estão danificadas.
// Crie um programa que simule o processamento das caixas, exibindo as válidas e ignorando as danificadas. 
// O programa deve parar o processamento assim que 5 caixas válidas forem processadas.

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];

for (let i = 0; i < caixas.length; i++) {
    let valor = caixas[i];
    if (valor < 0) {
        console.log("Caixa danificada, ignorada.")
        continue;
    }
  console.log(`Caixa processada: ${valor}`);
  processadas++;
 
  if (processadas === 5) {
    console.log("Limite de caixas processadas atingido!");
    break;
  }
}

// Você está desenvolvendo o sistema de login de um app interno da empresa. 
// O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. 
// Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.
// Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";

let = 0;
let acessoLiberado = false;
 
while (i < tentativas.length && i < 3) {
    if (tentativas[i] === senhaCorreta) {
        console.log("Acesso permitido!");
        acessoLiberado = true;
        break;
    } else {
        console.log(`Tentativa ${i + 1} inválida.`);
    }
    i++;
}
if (!acessoLiberado) {
  console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
}