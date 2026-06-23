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


// ─────────────────────────────────────────────────────────
// Praticando: Functions
// ─────────────────────────────────────────────────────────
// function darBoasVindas () {
//  console.log("Olá, Boas vindas!");
// }
// darBoasVindas();

// - EXPRESSÂO DE FUNÇÃO
const nomeVariavel = function (parametros) {
    // bloco de codigo
    return
}

const imprimeOlaMundo = function() {
    console.log('Olá, mundo!');
};
const boasVindas = function(nome) {return "Olá, ", nome}

// código omitido

// criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1
const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1; 
    return num * f (num -1);
}
console.log(fatorial(5));

// - ARROW FUNCTION
// mais compacta e sempre anônimas. 
// Tem uso restrito do que expressões e declarações de função
const nomeVariavel = (parametro) => {
    //bloco de codigo
    return
}
// ─────────────────────────────────────────────────────────
const soma = (num1, num2) => {
    console.log(num1 + num2);
};
const boasVindas = nome => "Olá!";
// ─────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────
const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor * Math.pow(taxaJuros, tempo); // pow (Potência)
}
console.log(calculaJuros(1000, 5, 2)); // 1000, 5% em 2 meses
// ─────────────────────────────────────────────────────────

// - FUNÇÔES CALLBACK
// São passadas como argumentos de outra função, de onde podem receber valores. 
// São executadas a partir da função externa
setTimeout (function() {
    console.log("Olá, Mundo!");
}, 2000);
setTimeout (() => console.log("Olá, Mundo"), 2000);

// É possível desacoplar as funções, definindo callbacks separadas da função externa, 
// chamada de função de ordem superior
setTimeout(exibeFrase, 5000);

function exibeFrase() {
    console.log('olá, mundo');
}


// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, 
// mas que funcione mesmo 
// quando nenhum nome for informado, exibindo uma saudação genérica. 
// Use o parâmetro pré-definido para lidar com isso.
function saudacaoPersonalizada (nome) {
    if (nome === undefined || nome === null) {
        return "Olá Visitante!"
    } else {
        return "Olá, " + nome + "!"; 
    }
}
mensagem = saudacaoPersonalizada();
console.log(mensagem);

// - DESAFIOS
// ─────────────────────────────────────────────────────────
// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, 
// mas que funcione mesmo 
// quando nenhum nome for informado, exibindo uma saudação genérica. 
// Use o parâmetro pré-definido para lidar com isso.
function saudacaoPersonalizada (nome) {
    if (nome === undefined || nome === null) {
        return "Olá Visitante!"
    } else {
        return "Olá, " + nome + "!"; 
    }
}
mensagem = saudacaoPersonalizada();
console.log(mensagem);

// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:
// o preço original do produto,
// a porcentagem de desconto (com um valor padrão de 10%).
function calcularDesconto (precoOriginal, desconto = 10) {
    precoDesconto = precoOriginal - (precoOriginal * desconto / 100);
    return precoDesconto;
}
console.log(calcularDesconto(100, 20))
console.log(calcularDesconto(100));

// Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. 
// A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.
// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.
const calcularMedia = (num1, num2) => {
    media = (num1 + num2) / 2;
}
console.log(calcularMedia(7, 9));

// Sua missão é criar uma arrow function chamada verificarParidade que 
// receba um número como parâmetro e retorne a string:
// "Par" se o número for par
// "Ímpar" se for ímpar
const verificarParidade = (number) => {
    if (number % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(verificarParidade(11));

//  o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:
// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. 

const calcularFrete = (km) => {
    if (km <= 5) {
        return "R$ 5.00";
    } else if (km <= 20) {
        const totalFrete = (0.5 * km)
        return `R$ ${totalFrete.toFixed(2)}` // 2 casas decimais
    } else {
        return "R$ 20.00"
    }
} 
console.log(calcularFrete(19));


// Imagine que você está criando uma função que simula o processamento de um pedido em um site. 
// Após o processamento, você quer que uma mensagem personalizada seja exibida 
// mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.
// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:
// o nome do cliente,
// o tipo do cliente (vip, novo ou comum),
// e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

function processarPedido (nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}

function mensagemPersonalizada (nome, tipo) {
    if (tipo.toLowerCase() === "vip") {
        setTimeout(() => {
            console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`)
        }, 200);
    } else if (tipo.toLowerCase() === "novo") {
        setTimeout(() => {
            console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`)
        }, 200);
    } else {
        setTimeout(() => {
            console.log(`Obrigado pela sua compra, ${nome} !`)
        }, 200);
    }
}

processarPedido("Paulo", "novo", mensagemPersonalizada);


// Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.]
// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:
// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.
function responderUsuario(nome, callback) {   
    console.log("Processando sua pergunta...");
    setTimeout(() => {        
        callback(nome);
    }, 3000);
}

function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
};

responderUsuario("Paulo", mostrarResposta);


// Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo.Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:
// Foi aprovado, se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50
// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:
// a pontuação final do jogador
// uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

function avaliarDesempenho (pontuacao, callback) {
    let status = ""; 
    if (pontuacao >= 70) {
        status = "aprovado";
    } else if (pontuacao >= 50 && pontuacao <= 69) {
        status = "reforco";
    } else {
        status = "reprovado";
    }
    callback(pontuacao, status)
}

function gerarMensagem(pontuacao, status) {
   console.log(`Pontuação: ${pontuacao}`)
   if (status.toLowerCase() === "aprovado") {
        console.log("Parabéns! Você foi aprovado!");
   } else if (status.toLowerCase() === "reforco") {
        console.log("Atenção! Você precisa de reforço.");
   } else {
    console.log("Infelizmente, você foi reprovado. Tente novamente.");
   }
};

avaliarDesempenho(82, gerarMensagem);

// Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. 
// O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.
// Sua missão é criar três funções separadas, com responsabilidades bem definidas:
// calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000
// classificarConsumo(consumo): Retorna a classificação com base na tabela:
// Consumo mensal (kWh)	Classificação
// Abaixo de 50	"Baixo consumo"
// 50 - 199	"Consumo moderado"
// 200 ou mais	"Alto consumo"
// exibirResumo(nomeAparelho, consumo, classificacao): 
// Exibe uma mensagem como:"Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."
function calcularConsumo (potencia, horasPorDia) {
    let consumo = (potencia * horasPorDia * 30) / 1000;
    return consumo
}
function classificarConsumo(consumo) {
    if (consumo < 50) {
        return "Baixo Consumo."
    } else if (consumo >= 50 && consumo <= 199) {
        return "Consumo moderado."
    } else {
        return "Alto consumo!"
    };
}
function exibirResumo(nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}`)
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);

// Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:
// Sortear aleatoriamente um nome da lista de participantes.
// Exibir esse nome com um pequeno atraso (como se fosse um suspense).
// Avaliar se o participante foi premiado ou não com base na pontuação:
// Acima de 80: "Parabéns, você foi premiado!"
// Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
// Abaixo de 50: "Infelizmente, não foi dessa vez."
// Sua missão é criar:
// Uma função para sortear um nome aleatoriamente.
// Uma função para exibir o nome sorteado com 2 segundos de atraso
// Uma função para avaliar a pontuação.
// Uma função final que organize o fluxo completo do sorteio.

const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};

const avaliarPremio = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!"
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios."
    } else {
        return "Infelizmente, não foi dessa vez."
    }
};

const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPremio(participante.pontuacao));
    }, 2000);
};

function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista)
    exibirResultado(sorteado);
}

const participantes = [
    { nome: "laura", pontuacao: 92 },
    { nome: "Paulo", pontuacao: 67},
    { nome: "Clara", pontuacao: 44}
];

realizarSorteio(participantes);

// Sua missão é criar uma função chamada contagemRegressiva que:
// Receba um número inteiro positivo (ex: 5)
// Imprima esse número e, a cada chamada, reduza em 1
// Quando chegar em 0, exiba a mensagem: "Lançamento!"
// A função deve ser implementada de forma recursiva, sem usar loops (for ou while).
function contagemRegressiva(numero) {
    if (numero === 0) {
        console.log("Lançamento!");
        return;
    } 
    console.log(numero);
    contagemRegressiva(numero - 1);
}
contagemRegressiva(5);