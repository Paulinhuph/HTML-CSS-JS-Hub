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


// 7 - Fundamentos Modernos
// ─────────────────────────────────────────────────────────

// - TRABALHANDO COM DATAS 
const agora = new Date()
console.log(agora)

console.log('Ano:', agora.getFullYear()) // Extraindo informações específicas da data
console.log('Mês 0-11:', agora.getMonth())
console.log('Dia do mês:', agora.getDate())
console.log('Hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())

const nascimento = new Date(2004, 10, 21) // Datas específicas que não seja o momento atual
console.log(nascimento)

// -- SPREAD E REST --

const camila1  = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

const camila2 = { ...camila1} // Clonagem eficiente com SPREAD (cria uma const desvinculada da primeira)
camila2.idade = 30

console.log(camila1)
console.log(camila2)

camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Senior',
    possuiCNH: true
}

console.log(camila1)

const { nome, ...restante } = camila1
console.log(nome)
console.log(restante)

// -- USANDO REST E SPREAD COM ARRAYS --
// -- Operador Spread --
const frutas = ['maçã', 'banana'];
const outrasFrutas = ['uva', 'manga'];
const todasFrutas = [...frutas, ...outraFrutas]; 
// Resultado: ['maçã', 'banana', 'uva', 'manga']

const original = [1, 2, 3];
const copia = [...original]; 
// Altera 'copia' sem modificar o array 'original'

// -- Operador Rest -- 
function somarTudo(...numeros) {
  return numeros.reduce((total, atual) => total + atual, 0);
}
console.log(somarTudo(1, 2, 3, 4)); // Resultado: 10

const numeros = [10, 20, 30, 40];
const [primeiro, ...resto] = numeros;
// 'primeiro' = 10
// 'resto' = [20, 30, 40]

// -- DESTRUCTURING --
// É um recurso de programação que permite extrair dados de arrays ou objetos e 
// armazená-los em variáveis distintas de forma simples e concisa.

const cores = ['vermelho', 'verde', 'azul'];
// Extração direta pelas posições
const [primeiraCor, segundaCor] = cores;
console.log(primeiraCor); // 'vermelho'
console.log(segundaCor);  // 'verde'
// Pulando o segundo elemento e atribuindo valor padrão
const [cor1, , cor3 = 'preto'] = cores;
console.log(cor3); // 'azul'

// ─────────────────────────────────────────────────────────
// Lista de Exercícios
// ─────────────────────────────────────────────────────────

// 1. Destructuring em objetos
// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
const dados = {
    nome: "Paulo",
    idade: 21,
    email: 'paulo@teste.com'
};

const {nome, idade, email} = dados;
console.log(nome);
console.log(idade);
console.log(email);

// 2. Destructuring em arrays
// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.
const linguagens = ['JavaScript', 'Python', 'C'];
const [ling1, ling2, ling3] = linguagens;
console.log(ling1)
console.log(ling2)
console.log(ling3)

// 3. Rest operator em função
// Crie uma função que receba vários números como parâmetros usando o operador rest (...).
//Utilize um laço for para somar todos os valores recebidos e retorne o total.
// -- Operador Rest -- 
let total = 0;
function soma(...numeros) {
    let total = 0;
    for (n of numeros) {
        total += n;
    }
    return total
}
console.log(soma(1, 10, 3, 4)); 

// 4. Spread operator com arrays
// Crie dois arrays de frutas e combine-os usando o operador spread.
const frutasVermelhas = ['Maça', 'Morango', 'Amora'];
const frutasAmarelas = ['Banana', 'Melão', 'Abacaxi'];

const todasFrutas = [...frutasVermelhas, ...frutasAmarelas];
console.log("Frutas Vermelhas: ", frutasVermelhas);
console.log("Frutas Vermelhas: ", frutasAmarelas);
console.log("Todas as Frutas: ", todasFrutas);

// 5. Spread operator com objetos
//Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
const pessoaNome = {
    nome: "Paulo"
};
const pessoaIdade = {
    idade: 21
};

const juntaTudo = {...pessoaNome, ...pessoaIdade}
console.log(juntaTudo)

// 6. Função com parâmetro default
// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.
function mensagem(nome = "Visitante") {
        return "Olá " + nome + "!";
    }
exibicao = mensagem()
console.log(exibicao)

// 7. Trabalhando com datas
// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
const dataAtual = new Date()
console.log(dataAtual.getFullYear() + "/" + (dataAtual.getMonth() + 1) + "/" + dataAtual.getDate())
console.log(dataAtual.getHours() + ":" + dataAtual.getMinutes())

// 8. Modularização com export/import
// Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).
export function somar(a, b) { 

return a + b; 

} 

import { somar } from './somar.js'; 

console.log(somar(5, 3)); 

// 9. Objeto com função construtora
// Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
// Em seguida, crie dois objetos Livro usando essa função.
function livro (titulo, autor) {
    this.titulo = titulo;
    this.autor = autor
};
const livro1 = new livro("O Hobbit", "J. R. R. TOlkien")
const livro2 = new livro("O Mito de Sísifo", "Albert Camus")


console.log(livro1);
console.log(livro2);

// 10. Método no objeto
// Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.
function livro (titulo, autor) {
    this.titulo = titulo;
    this.autor = autor
    this.descrever = function() {
        return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
    };
};
const livro1 = new livro("O Hobbit", "J. R. R. TOlkien");
const livro2 = new livro("O Mito de Sísifo", "Albert Camus");

console.log(livro1.descrever());
console.log(livro2.descrever());